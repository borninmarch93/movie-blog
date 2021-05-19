import * as React from "react";
import styles from '../../sass/helpers/Grid.module.scss';
import classNames from 'classnames';

const Grid = props => {
    const {
        alignItems,
        className,
        children,
        column,
        expanded,
        justify,
        xl,
        lg,
        md,
        row,
        sm,
        xs
    } = props;

    const isRow = row || !column;

    const classes = classNames(
        className,
        (!isRow ? styles.column : styles.row),
        // Row styling
        (isRow && expanded ? ` ${styles.expanded}` : ""),
        (isRow && justify ? ` ${styles[justify]}` : ""),
        (isRow && alignItems ? ` ${styles["align-" + alignItems]}` : ""),
        // Column styling
        (!isRow && xs ? ` ${styles["xs-" + xs]}` : ""),
        (!isRow && sm ? ` ${styles["sm-" + sm]}` : ""),
        (!isRow && md ? ` ${styles["md-" + md]}` : ""),
        (!isRow && lg ? ` ${styles["lg-" + lg]}` : ""),
        (!isRow && xl ? ` ${styles["xl-" + xl]}` : ""),
    )

    return <div className={classes}>{children}</div>;
};

export default Grid;