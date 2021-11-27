/**
 * This is an incomplete script of apollo server. Please
 * make it live with features we requested. :)
 *
 */

require('dotenv').config()

import { ApolloServer, gql } from 'apollo-server'


const articles = [
  {
    id: 1,
    title: 'Everyone’s Moving to Texas. Here’s Why.',
    content: 'The traumas of the past few years have rearranged all of our lives. Many Americans have new needs, new desires, new possibilities and new priorities. They’re looking for bigger homes, second homes or any home at all. They’re searching for work — or trying to escape work. Some fear encroaching heat, fire or flood. Others are repulsed by bitter local politics. Many simply hear the distant siren of a better life elsewhere.',
  },
  {
    id: 2,
    title: 'He Convinced Voters He Would Be Like Merkel. But Who Is Olaf Scholz?',
    content: 'BERLIN — Olaf Scholz succeeded in his campaign to become the next chancellor of Germany primarily by convincing voters that he would be very much like the towering and long-serving figure he will replace: Angela Merkel.',
  },
  {
    id: 3,
    title: 'London, Fashion and the Importance of Being … Something',
    content: 'LONDON — At first glance, it looked like it was back to business at London Fashion Week. A vast industrial show space was heaving on Friday, packed with public relations types and security guards in headsets, glowing floor-to-ceiling screens blasting social content (the venue was sponsored by TikTok) and tightly packed rows of fashion glitterati.',
  },
  {
    id: 4,
    title: 'The U.S. Is Reopening. Here’s What Travelers Need to Know About Testing, Boosters and More.',
    content: 'On Nov. 8, the United States will lift an 18-month ban on international tourists, as long as they show proof of vaccination and a negative coronavirus test. The land borders with Canada and Mexico will also reopen for international visitors who are fully vaccinated and American citizens residing in those countries, as well as U.S. tourists returning home. Currently, passenger traffic in the United States is close to reaching 2019 levels, with millions of domestic travelers passing through Transportation Security Administration checkpoints each day.',
  },
  {
    id: 5,
    title: 'First Known Covid Case Was Vendor at Wuhan Market, Scientist Claims',
    content: 'A scientist who has pored over public accounts of early Covid-19 cases in China reported on Thursday that an influential World Health Organization inquiry had most likely gotten the early chronology of the pandemic wrong. The new analysis suggests that the first known patient sickened with the coronavirus was a vendor in a large Wuhan animal market, not an accountant who lived many miles from it.',
  },
  {
    id: 6,
    title: 'The 2021 New York Times/New York Public Library Best Illustrated Children’s Books',
    content: 'Since 1952, we’ve convened a rotating annual panel of three expert judges who consider every illustrated children’s book published that year in the United States. In 2017, we began partnering with the New York Public Library to administer the honor now called The New York Times/New York Public Library Best Illustrated Children’s Books Award.',
  },
];

// init server
const server = new ApolloServer({
  cors: {
    origin: ['http://localhost:8000'],
  },
  dataSources: () => ({ }),
  debug: true,
  resolvers: {
    Query: {
      articles: () => {
        return articles;
      },
      article: async(parent: any, args: any, context: any, info: any)  =>{
        return articles.find(item=> item.id === args.articleQuery.id);
      }
    },
    Mutation: {
      createArticle: async(parent: any, args: any, context: any, info: any) =>{
        const newArticle = {...args.articleInput};
        let index: number = 0;
        articles.forEach(item => {
          if(item.id > index){
            index = item.id;
          } 
        })
        newArticle.id = index + 1;
        articles.push(newArticle);
        return newArticle;
      }
    },
  },
  typeDefs: gql`
    type Article {
      id: Int
      title: String
      content: String
    }

    input ArticleQuery{
      id: Int
    }

    type Query {
      articles: [Article]
      article(articleQuery: ArticleQuery): Article
    }

    input ArticleInput {
      title: String
      content: String
    }

    type Mutation {
      createArticle(articleInput: ArticleInput): Article
    }
  `,
})

// run server up
server
  .listen({ port: '8080' })
  .then(({ url }) => console.log(`Server is ready at ${url}`))
