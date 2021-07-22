import Button from "@sonnat/ui/Button";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow
} from "@sonnat/ui/Table";
import Tag from "@sonnat/ui/Tag";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "TableBasicDemo";

const demoCode = `<Table caption="Basic Table">
  <TableHeader>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Age</TableCell>
      <TableCell>Tags</TableCell>
      <TableCell>Actions</TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>25</TableCell>
      <TableCell>
        <Tag color="secondary" label="Front-end Developer" />
        <Tag color="primary" label="Senior" />
      </TableCell>
      <TableCell>
        <Button label="Delete" variant="inlined" />
        <Button label="Edit" variant="inlined" />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jim Halpert</TableCell>
      <TableCell>30</TableCell>
      <TableCell>
        <Tag color="secondary" label="Sales" />
        <Tag color="primary" label="Manager" />
      </TableCell>
      <TableCell>
        <Button label="Delete" variant="inlined" />
        <Button label="Edit" variant="inlined" />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jude Brown</TableCell>
      <TableCell>23</TableCell>
      <TableCell>
        <Tag color="secondary" label="Back-end Developer" />
        <Tag color="primary" label="Junior" />
      </TableCell>
      <TableCell>
        <Button label="Delete" variant="inlined" />
        <Button label="Edit" variant="inlined" />
      </TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={4}>This is the footer</TableCell>
    </TableRow>
  </TableFooter>
</Table>`;

const useStyles = makeStyles(theme => {
  const {
    typography: { pxToRem }
  } = theme;

  return {
    tags: { "& > * + *": { marginLeft: pxToRem(8) } },
    actions: { "& > * + *": { marginLeft: pxToRem(8) } }
  };
});

const TableBasicDemo: React.FC = () => {
  const classes = useStyles();

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <Table caption="Basic Table">
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>25</TableCell>
            <TableCell className={classes.tags}>
              <Tag color="secondary" label="Front-end Developer" />
              <Tag color="primary" label="Senior" />
            </TableCell>
            <TableCell className={classes.actions}>
              <Button label="Delete" variant="inlined" />
              <Button label="Edit" variant="inlined" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jim Halpert</TableCell>
            <TableCell>30</TableCell>
            <TableCell className={classes.tags}>
              <Tag color="secondary" label="Sales" />
              <Tag color="primary" label="Manager" />
            </TableCell>
            <TableCell className={classes.actions}>
              <Button label="Delete" variant="inlined" />
              <Button label="Edit" variant="inlined" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jude Brown</TableCell>
            <TableCell>23</TableCell>
            <TableCell className={classes.tags}>
              <Tag color="secondary" label="Back-end Developer" />
              <Tag color="primary" label="Junior" />
            </TableCell>
            <TableCell className={classes.actions}>
              <Button label="Delete" variant="inlined" />
              <Button label="Edit" variant="inlined" />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>This is the footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </DemoBox>
  );
};

TableBasicDemo.displayName = componentName;

export default TableBasicDemo;
