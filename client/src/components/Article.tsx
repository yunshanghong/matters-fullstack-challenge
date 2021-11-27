
import React from 'react'
import { makeStyles } from '@mui/styles';
import { ArticleData } from '../models/ArticleData';

const useStyles = makeStyles((theme) => ({
    article: {
        display: "flex",
        width: '75%',
        margin: '0 12.5%',
        border: "1px solid #ddd",
        flexDirection: "column",
        marginBottom: "-1px",
        padding: "10px",
        "&:hover": {
            backgroundColor: '#eee'
        },
    },
    title: {
        fontFamily: "微軟正黑體",
        padding: "10px 0",
        fontSize: 25
    },
    content: {
        padding: "20px 0",
        fontSize: 20
    }
}));

const Article = (props: ArticleData): React.ReactElement => {
    const classes = useStyles(props);
    return (
        <div className={classes.article}>
            <div className={classes.title}> {props.title}</div>
            <div className={classes.content}>{props.content}</div>
        </div>
    )
}

export default Article;
