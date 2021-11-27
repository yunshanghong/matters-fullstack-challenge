import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ArticleData } from '../models/ArticleData';

interface RouteParams {
    id: string
}

const ArticlePage = (props: any): React.ReactElement => {
    let { id } = useParams<RouteParams>();
    const [article, setArticle] = useState<ArticleData>({
        id: 0,
        title: "",
        content: ""
    });

    useEffect(() => {
        axios.post('http://localhost:8080/', {
            query: `
				query{
                    article(articleQuery: {id: ${id}}){
                        id
                        title
                        content
                    }
                }
			`
        }).then(resp => {
            setArticle(resp.data.data.article);
        }).catch(err => console.log(err))
    }, [])
    return <Article key={article.id} id={article.id} title={article.title} content={article.content} />
}

export default ArticlePage;
