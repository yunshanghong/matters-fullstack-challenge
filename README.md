# Full-stack Engineer Code Challenge

Start the project 

* Install all the dependencies 
> $cd server; npm install 
> $cd client; npm install  

* Run the server side and client side project
> $cd server; npm run start
> $cd client; npm run start


# Full-stack Engineer Written Challenge

## Section 1: Architectural Design

*Please answer at lease one of the following questions.*

* Assume that you are building a discussion forum similar with [Hacker News](https://news.ycombinator.com/). The product will be very popular, and your team made the following projection: monthly traffic of 30k page views and 5k posts in the first year, and monthly traffic of 300m page views and 500k posts in the second year. How would you choose your frontend and backend technologies, infrastructures and deploying methods? What methods will you use in scaling your platform and envovling the infrastructures?

> First, I will choose React or Angular framework to be the fronted infrastructure of the forum and nodejs as the backend service of the forum. Because the forum is very popular, I need to design an asynchronous service with flexibility to ensure the every person works fine and are not blocked by others. Nodejs, React, and Agular match the asynchronous need with flexibility.

> Second, distributed system is important for a big famous website, especially the forum being full of people. Therefore, I would choose docker to help balance the pressure of the website. Besides, with docker, we can easily extend our service or microservice. 

> Finally, I will use the CI/CD tools such as kubernetes to deply the system. When using CI/CD, the process of the deployment can be completed automatically including running the unit test.   

* Assume that you are building a backend service for a medical company. When a request come in, this service needs to take the user input, pass it to a pre-trained computational model, and return the output to the user. The service needs to handle a high request frequency with uncertian average traffic volumne, and the computational model needs to process large amount of data in parallel. How would you design this service and choose the building blocks to achieve the above requirements?

> First, I would build an asynchronous backend service because asynchronous backend service can effectively use the CPU to deal with the high-computed problems. We know that asynchronous APIs are great in instances where user activity is heavy. These API requests excel at executing background tasks without getting in each other’s way. 

> Second, the key point is that we do not accurately know the traffic volumne; consequently, we need to have a distributed system in order to prevent the system from crashing by the peak user volumn. AWS, GCP, and AZURE provide a lot of tools to complete a distributed system without too much efforts. Because of the convenience, I would use cloud service tools to acheive the requirements.

* Assume that you have an application that is growing very fast. It uses PostgreSQL as data storage, and the growing traffic is making write and read operations slow. What strategies would you take to scale your database horizontally and vertically?

> The low effectiveness of reading and writing database is a common issue happening in any big growing bussiness. To deal with the problem, checking pg_stat_activity is the first step to understand just what is going on. If there is a specific query or queries that are "slow" or "hung", check to see if they are waiting for another query to complete. Due to relation locking, other queries can lock a table and not let any other queries to access or change data until that query or transaction is done.

> Second, investigating if the queries are running, why are they taking so long? If a query (or set of queries) in question has the status of ‘active’, then it’s actually running. If the whole query isn’t available in pg_stat_activity, fetch it from the developers or the postgresql log and start exploring the query planner.

> Third, if the issue still can’t be found, check the logs for any clues.

## Section 2: Distributed Systems and Web3

*Please answer at lease one of the following questions.*

* Assume you are to design a product supporting a social network, which allows users to publish articles, comment on articles, and follow other users' articles and comments. You also want this social network to be decentralized, so that it is not easilier censored, that the network cannot be brought down by single point of failure, and that other developers can build different tools for the network. What technologies and product would be the essential building blocks, what roles would they play, and how would you combine them together?

> Well, we can build a decentralized network by using blockchain technology. In my point of view, web3 is one of the options and that helps people store data on the Internet. In the blockchain, most people play a role as a ledger which is also called miner in Bitcoin world. These ledgers can be seen as nodes in the internet world, with them,  the community can transfer data through each node without a center database. 

* Assume you are to design a product for crowdfunding creative projects with NFTs, where the creator pre-sale the ownership of the final result as NFTs. From minting the tokens to delivering the final result, what are the UX and techonogical challenges you forsee, and what do you think it takes to solve these problems well?



## Section 3: Personal Passions and Communities

*Please answer at lease two of the following questions.*

* What are some technologies you are recently fascinated with, and why are they interesting to you?

> Recently, blockchain is a really popular technology throughout the world and I am really interested in the field. The most fascinating of blockchain is the decentralized concept because we can store a file on the Internet without a government.

* What are some open source projects that you are involved with, or enjoy working on? What aspect of the project (e.g. architectural design, scope, community vibe, organization) makes it enjoyable or admirable?

> To be honest, I have not been involved in any open source project but I do really want to join to be part of the open source ally. Moreover, I did a lot of side projects such as TOYOTA Kinto Sigapore and Youth Salon Taiwan and so on. I spend most of my time on developing the frontend and backend service for normal people. The core concept of all of these services is making people more convenient and I think that is also my ambitions. 

* If you were given the resource and freedom to start and maintain an open source project, what problem do you choose to solve, and how would you setup the community guideline and collabration process?
