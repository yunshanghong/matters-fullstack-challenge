/**
 * This is an incomplete script of client app. Please
 * make it live with features we requested. :)
 *
 */

import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import CreateArticleDialog from '../components/CreateArticleDialog';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { ArticleData } from '../models/ArticleData';
import NoticeDialog from '../components/NoticeDialog';
import Pagination from '@mui/material/Pagination';

const useStyles = makeStyles((theme) => ({
	paginationContainer: {
		width: '100%',
		textAlign: 'center',
		padding: '20px 0'
	},
	pagination: {
		display: 'inline-block'
	}

}));

const Home = (props: any): React.ReactElement => {
	const history = useHistory();
	const classes = useStyles(props);
	const [page, setPage] = useState(1);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [noticeOpen, setNoticeOpen] = useState(false);
	const [noticeInfo, setNoticeInfo] = useState("");
	const [articles, setArticles] = useState<Array<ArticleData>>([]);

	useEffect(() => {
		axios.post("http://localhost:8080/", {
			query: `
				query{
					articles{
						id
						title
						content
					}
				}
			`
		}).then(resp => {
			setArticles(resp.data.data.articles);
		})
	}, [])
	const handleClickOpen = () => {
		setDialogOpen(true);
	};

	const handleClose = () => {
		setDialogOpen(false);
	};

	const handleNoticeOpen = (noticeWord: string) => {
		setNoticeOpen(true);
		setNoticeInfo(noticeWord);
	}

	const handleNoticeClose = () => {
		setNoticeOpen(false);
	}


	const handleCreateArticle = (newArticle: ArticleData) => {
		const newArticles = [...articles];
		newArticles.push(newArticle)
		setArticles(newArticles);
	}

	const handlePageChange = (e: any, value: number) => {
		setPage(value);
	}

	const handleClickArticle = (id: number) => {
		history.push(`/article/${id}`);
	}

	return (
		<div>
			<CreateArticleDialog
				open={dialogOpen}
				onClose={handleClose}
				onOpenNoticeDialog={handleNoticeOpen}
				createMethod={handleCreateArticle}
			/>
			<NoticeDialog
				open={noticeOpen}
				onClose={handleNoticeClose}
				NoticeWord={noticeInfo}
			/>
			<Grid container >
				<Grid item xs={1.5} />
				<Grid item xs={9} >
					<Button variant="outlined" onClick={handleClickOpen}>
						Create a new Article
					</Button>
				</Grid>
				<Grid item xs={1.5} />

				{articles.map((item: ArticleData, index) => {
					if (index >= (page - 1) * 5 && index < page * 5) {
						return (
							<div onClick={() => { handleClickArticle(item.id) }} key={item.id}>
								<Article id={item.id} title={item.title} content={item.content} />
							</div>
						)
					}
				})}

			</Grid>

			<div className={classes.paginationContainer}>
				<Pagination count={Math.ceil(articles.length / 5)} page={page} onChange={handlePageChange} className={classes.pagination} />
			</div>
		</div>
	)
}

export default Home;
