/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Close, Download, Github, Magnifier } from "@sonnat/icons";
import {
  Button,
  ChoiceChip,
  Code,
  Column,
  Container,
  Divider,
  InputAdornment,
  Row,
  Text,
  TextField,
  type IconProps
} from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import WithSidebar from "components/layouts/WithSidebar";
import IconDrawer from "components/partials/IconDrawer";
import IconSample from "components/partials/IconSample";
import { MediaQueryContext } from "context";
import globAsync from "fast-glob";
import fse from "fs-extra";
import throttle from "lodash.throttle";
import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";
import * as React from "react";
import { defaultKeywordsMetaContent, siteFullAddress } from "sharedVars";
import type { NextPageWithLayout } from "types";
import {
  setCanonicalMeta,
  setDescriptionMeta,
  setKeywordsMeta,
  setTitleMeta
} from "utils";

const pageName = "IconsPackagePage";

const useStyles = makeStyles(
  theme => {
    const {
      breakpoints,
      spacings: { spacer },
      typography: { pxToRem, variants }
    } = theme;

    return {
      sectionHead: {},
      sectionBody: {},
      heading: {},
      description: {
        marginTop: spacer.rem,
        marginBottom: pxToRem(spacer.px * 2)
      },
      headActionBar: {
        display: "flex",
        alignItems: "center",
        marginBottom: pxToRem(spacer.px * 2),
        "& > * + *": { marginLeft: pxToRem(spacer.px * 0.5) }
      },
      bodyActionBar: {
        marginTop: pxToRem(spacer.px * 2),
        marginBottom: pxToRem(spacer.px * 2),
        display: "flex",
        alignItems: "center"
      },
      searchField: { marginRight: pxToRem(spacer.px * 2) },
      fieldSeparator: {
        marginTop: pxToRem(spacer.px * 0.5),
        marginBottom: pxToRem(spacer.px * 0.5)
      },
      chips: {
        display: "flex",
        alignItems: "center",
        marginLeft: pxToRem(spacer.px * 4)
      },
      filledChip: { marginRight: pxToRem(spacer.px * 0.5) },
      outlinedChip: {},
      iconSample: { marginBottom: spacer.rem },
      emptyState: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "1 0"
      },
      [breakpoints.down("sm")]: {
        heading: { fontSize: variants.h4.fontSize },
        headActionBar: { "& > *": { flexShrink: 0, flexGrow: 1 } },
        bodyActionBar: { flexDirection: "column", alignItems: "flex-start" },
        searchField: { marginRight: 0, marginBottom: spacer.rem },
        chips: { marginLeft: 0 }
      }
    };
  },
  { name: pageName }
);

interface IconData {
  kebabCaseName: string;
  pascalCaseName: string;
  file: string;
}

interface IconDataState extends IconData {
  component: React.ReactNode;
}

interface IconsProp {
  byName: {
    [P: string]: IconData;
  };
  allNames: string[];
}

interface PageProps {
  icons: IconsProp;
  zipPath: string;
}

const IconsPackagePage: NextPageWithLayout<PageProps> = ({
  icons,
  zipPath
}) => {
  const classes = useStyles();

  const mediaQuery = React.useContext(MediaQueryContext);

  const [variant, setVariant] = React.useState<"filled" | "outlined" | "">("");

  const [searchValue, setSearchValue] = React.useState("");
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const [hasEmptyState, setHasEmptyState] = React.useState(false);

  const [selectedIcon, setSelectedIcon] = React.useState<IconDataState | null>(
    null
  );

  const onIconSelect = (iconData: IconDataState) => {
    setSelectedIcon(iconData);
    setDrawerOpen(true);
  };

  const cachedSource = React.useMemo(() => {
    return icons.allNames.map(iconName => {
      const iconData = icons.byName[iconName];

      const IconComponent = dynamic<IconProps>(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        async () =>
          import(`@sonnat/icons`).then(
            module => module[iconData.pascalCaseName]
          )
      );

      return (
        <Column
          data-key={`${iconData.kebabCaseName}`}
          key={iconData.pascalCaseName}
          sm={2}
          all={4}
        >
          <IconSample
            className={classes.iconSample}
            icon={<IconComponent />}
            name={iconData.kebabCaseName}
            onSelect={() =>
              void onIconSelect({
                ...iconData,
                component: <IconComponent color="textSecondary" />
              })
            }
          />
        </Column>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [filteredIcons, setFilteredIcons] =
    React.useState<JSX.Element[]>(cachedSource);

  const onSearch = throttle((value: string) => {
    const key = value.toLowerCase();

    if (key && key.length >= 2) {
      const filtered = cachedSource.filter(jsx => {
        const jsxKey: string = jsx.props["data-key"];

        return jsxKey.includes(key);
      });

      setFilteredIcons(filtered);
    } else setFilteredIcons(cachedSource);

    setSearchValue(value);
  }, 750);

  const cachedResult = React.useMemo(() => {
    let filtered: JSX.Element[] = filteredIcons;

    if (variant === "filled") {
      filtered = filteredIcons.filter(jsx => {
        const jsxKey: string = jsx.props["data-key"];
        return !jsxKey.includes("-o");
      });
    } else if (variant === "outlined") {
      filtered = filteredIcons.filter(jsx => {
        const jsxKey: string = jsx.props["data-key"];
        return jsxKey.includes("-o");
      });
    }

    if (filtered?.length === 0) setHasEmptyState(true);
    else setHasEmptyState(false);

    return filtered;
  }, [variant, filteredIcons]);

  const renderEmptyState = () => (
    <div className={classes.emptyState}>
      <Text variant="bodySmall" as="p" color="textSecondary" align="center">
        No results found for the provided input!
      </Text>
    </div>
  );

  const clearSearch = () => {
    setSearchValue("");
    setHasEmptyState(false);
    setFilteredIcons(cachedSource);
  };

  const display = hasEmptyState ? renderEmptyState() : cachedResult;

  return (
    <React.Fragment>
      <Head>
        {setTitleMeta(
          "Sonnat-Icons | Sonnat Developer Tools, React Components & Resources"
        )}
        {setDescriptionMeta(
          "The growing icon collection that allows designers and developers to download or install SVG Icons for any projects."
        )}
        {setCanonicalMeta(`${siteFullAddress}/docs/packages/icons`)}
        {setKeywordsMeta([
          ...defaultKeywordsMetaContent,
          "sonnat",
          "icons",
          "sonnat-icons",
          "@sonnat/icons",
          "react",
          "svg"
        ])}
      </Head>
      <div className={classes.sectionHead}>
        <Text className={classes.heading} variant="h3" as="h1">
          Sonnat Icon Set
        </Text>
        <Text className={classes.description} variant="body" as="p">
          The growing icon collection that allows designers and developers to
          download or install SVG Icons for any projects.
          <br />
          Start using it in ReactJS projects:{" "}
          <Code>{`npm install @sonnat/icons`}</Code> or{" "}
          <Code>{`yarn add @sonnat/icons`}</Code>.
        </Text>
        <div className={classes.headActionBar}>
          <Button
            as="a"
            download="sonnat-icons.zip"
            href={zipPath}
            label="Download"
            leadingIcon={<Download />}
            color="primary"
          />
          <Button
            as="a"
            href="https://github.com/sonnat/sonnat-icons"
            target="_blank"
            rel="noopener noreferrer"
            label="Github"
            leadingIcon={<Github />}
            variant="inlined"
          />
        </div>
        <Divider />
      </div>
      <div className={classes.sectionBody}>
        <div className={classes.bodyActionBar}>
          <TextField
            fluid
            value={searchValue}
            onChange={newValue => void onSearch(newValue)}
            className={classes.searchField}
            placeholder="Search for icon"
            leadingAdornment={
              <InputAdornment variant="icon">
                <Magnifier />
              </InputAdornment>
            }
            trailingAdornment={
              searchValue && (
                <InputAdornment
                  variant="icon"
                  onClick={() => void clearSearch()}
                >
                  <Close />
                </InputAdornment>
              )
            }
          />
          {!mediaQuery.isMobile && (
            <Divider vertical className={classes.fieldSeparator} />
          )}
          <div className={classes.chips}>
            <ChoiceChip
              className={classes.filledChip}
              label="Filled"
              variant="outlined"
              rounded
              color="primary"
              selected={variant === "filled"}
              onToggle={isSelected =>
                void (isSelected ? setVariant("filled") : setVariant(""))
              }
            />
            <ChoiceChip
              className={classes.outlinedChip}
              label="Outlined"
              variant="outlined"
              rounded
              color="primary"
              selected={variant === "outlined"}
              onToggle={isSelected =>
                void (isSelected ? setVariant("outlined") : setVariant(""))
              }
            />
          </div>
        </div>
        <div className={classes.bodyContent}>
          <Container fluid noPadding>
            <Row>{display}</Row>
          </Container>
        </div>
      </div>
      <IconDrawer
        data={selectedIcon}
        open={isDrawerOpen}
        toggle={() => void setDrawerOpen(!isDrawerOpen)}
      />
    </React.Fragment>
  );
};

const toPascalCase = (string: string, splitRegex: string | RegExp) => {
  const baseCase = string.split(splitRegex);

  return baseCase
    .map(part => part.charAt(0).toUpperCase() + part.substring(1))
    .join("");
};

const cleanSvgData = (data: string) => {
  return data
    .replace(/ fill=".+?"/g, "")
    .replace(/ fill-opacity=".+?"/g, "")
    .replace(/ clip-path=".+?"/g, "") // Fix visibility issue and save some bytes.
    .trim();
};

export const getStaticProps: GetStaticProps = async () => {
  const icons: IconsProp = { byName: {}, allNames: [] };

  const rootPath = process.cwd();
  const svgsSrc = path.join(rootPath, "public/static/svgs");
  const zipPath = path.join(rootPath, "public/static/sonnat-icons.zip");

  const iconsExist = fse.existsSync(svgsSrc);
  if (!iconsExist) return { props: { icons } };

  const svgs = await globAsync(path.join(svgsSrc, "**/*.svg"));
  if (!svgs || !svgs.length) return { props: { icons } };

  await Promise.all(
    svgs.map(async svgPath => {
      const normalizedSvgPath = path.normalize(svgPath);
      const svgPathObj = path.parse(normalizedSvgPath);

      const initData = await fse.readFile(svgPath, { encoding: "utf8" });
      const cleansedData = cleanSvgData(initData);
      const kebabCaseName = svgPathObj.name;
      const pascalCaseName = toPascalCase(kebabCaseName, "-");

      await fse.writeFile(svgPath, cleansedData);
      const instance = {
        kebabCaseName,
        pascalCaseName,
        file: normalizedSvgPath.replace(path.join(rootPath, "/public"), "")
      };

      icons.byName[kebabCaseName] = instance;
      icons.allNames.push(kebabCaseName);
    })
  );

  return {
    props: {
      icons,
      zipPath: zipPath.replace(path.join(rootPath, "/public"), "")
    }
  };
};

const PageLayout = (page: React.ReactNode) => {
  return <WithSidebar>{page}</WithSidebar>;
};

IconsPackagePage.getLayout = () => PageLayout;
IconsPackagePage.displayName = pageName;

export default IconsPackagePage;
