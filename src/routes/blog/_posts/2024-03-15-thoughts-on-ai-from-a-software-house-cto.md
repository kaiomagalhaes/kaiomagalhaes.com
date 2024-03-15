---
title: 'What I learned in my last year building AI products at Codelitt'
---

December of 2022 is a month that will go down in history as the one in which the world was all looking at the same new shiny thing: ChatGPT. OpenAI released both OpenAI API and ChatGPT in November 2022. I was one of the hundreds of developers building proofs of concept on top of it. With hindsight, I realized the ideas I came up with were the same as most individuals and companies were trying at the time. Products that until then had a prohibitive price but suddenly could be built with the cost of pennies by comparison.

Here, I want to discuss my experience at Codelitt using AI to build proofs of concept and the lessons I learned along the way.

# Proofs of concept

## RailsCodeCare

My first POC was nothing short of audacity; it was a company. As I work in a software services company, creating a new service to maintain Ruby On Rails applications would be a great idea. I already had this idea before, but just thinking about the marketing side made me dizzy. That was when I realized I could use this new technology to help me with marketing. The flow of my application was the following:

1. I would send a topic as the title of an email to my bot. It would be something like "How to build data pipelines with Ruby on Rails 7.0"
2. The bot would receive the email and transform the title into one that could be better marketing-wise
3. Use the new title to create a blog post
4. Upload the well-formatted blog post to my website

I understood that the likelihood of Search engines ranking my content would be small, but I also knew that I could learn a ton from building it. Fortunately, what I was suspicious about became a reality. A while ago, Google said that it wouldn't rank AI-generated content. That said, I believe anyone can use AI-generated content as a draft and create high-quality content from it.

## Tasketeer

A long-standing problem for big companies is knowledge sharing. Over the years, I lost count of the applications I had built around this topic. This idea of a company being capable of losing employees without missing what they learned over the years is a beautiful one. I brought it up with Codelitt's CEO, and we decided to build a tool to make this dream a reality. We even presented it at MongoDB.Local in New York. The user flow was the following:

1. The user creates an account
2. The user uploads any file they want to make it searchable. For instance, I uploaded all of our HR documentation
3. Tasketeer would get the files, extract the content using Box, and upload it to a Mongo Vector Database
4. The user can now ask questions on Slack or Tasketeer's chat about the content and get valuable answers

We first used it internally, and it was amazing to see our HR knowledge available to our team. At some point, we started seeing many big players solving this same problem, like Google's notebook project, and we decided to open our code for anyone curious about how we've done it. You can find it here.

## Distressed property appraiser

This project was by far the most complex one. The goal was to extract information for property APIs, process it, and use it to evaluate the property cost of properties in a specific area. To achieve this, we had to pull information from many different resources and use the latest options from Google Cloud Provider to process this data and turn it into information.

## Plain text to API JSON filters

This project was the most significant example of the power of automation using AI. A customer reached out to Codelitt with a simple problem. His application had over 250 filters from which users had to choose manually. His goal was to allow their users to specify what they were looking for through a single text input and have the application bring the results. That means that the application had to:

1. Get the text input value
2. Send the text value to a "plain text to JSON API"
3. Get the API result and send it to the filter API

This was a straightforward problem, and we solved it using LangChain and Python. It is currently in production, resulting in a better user experience for our customers.

## StoryForge

This one was more of an "I've been repeating this way too many times" situation. After building the first projects, I realized they all had something in common.

They all would:

1. Receive an input in plain text through an HTTP request
2. Match this input with content stored in a vector database
3. Send the result asynchronously to another API

To solve time in future cases, I built StoryForge, which is an open-source application that does precisely those steps but in a configurable way. Once the server is up, the developer can:

1. Send any text document supported by Box
2. Define the context ID, allowing it to have multiple "libraries" or "data sources," where each library/data source can consist of multiple files
3. Send a task in plain text, i.e., "Tell me what is our Company's HR policy" passing the ID of the data source and what kind of prompt it should use
4. Set the webhook with an identifier it needs to send the result to

# Lessons learned

## 1. Dealing with AI through APIs has never been easier, but solving hard, real-world problems is still hard

With OpenAI (and now many competitors), processing data with AI is as easy as making an HTTP request, but it is only that simple for easy problems. For instance, building the entire RailsCodeCare flow was easy. It meant using the Ruby library Zapier to read the emails and send the content to my Ruby/Sinatra API, and that was it. Because it wasn't data-heavy, it was simple. However, for the Distressed property appraiser, it was more complicated. Training an AI model is still costly and time-consuming. Many tools are available that make it easier, but it still took us a couple of months to get this last project done and a highly specialized AI engineer to support us.

## 2. It will only get cheaper to build AI products

Although the direction of any technology is to get more accessible and advanced over time, I wasn't expecting it to happen at this velocity with AI. In 2023 alone, OpenAI created a new model (GPT 4.0) and doubled the amount of tokens available, going up to 128,000. Other companies, such as Anthropic, offer models like Claude 3 that support 200,000 token context windows. While building the "Plain text to API JSON filters," the context window in OpenAI had 32,000 tokens, which was a challenge for us, as we had to send a description of each of the 250 filters. A month after we released the first version, the limit went to 128,000 tokens, and the price dropped.

I can only expect the context window to disappear in one or two years and the costs to decrease by at least one order of magnitude.

## 3. It is cheaper to have a healthy database than to expect AI to deal with wrong data input

During this time, I've seen many companies trying to put all their data on AI models and expect them to return valuable data. Unfortunately, I've seen them being successful in none of those cases. AI models can only perform properly when given the minimum data quality level, which will vary depending on your expectations. The essential requirement for any AI-related project is to prepare the data uniformly and meaningfully. For instance, just throwing in an entire SQL database to a model and expecting it to give you insights is the same as doing it for an engineer who doesn't understand the data. You'll waste resources and everybody's time and get nothing out of it.

## 4. Profession replacement isn't as simple as plugging in an AI model (for most cases)

I first built an integration with Intercon for a chatbot in 2015. The problem at the time was that the company's CEO couldn't pay someone to answer customer's questions, so he had to answer them himself. Nowadays, that is almost no longer a problem. Many companies offer "The best and only chatbot your company needs that can use your documents to answer any customer question". This looks great until you realize that you need more documentation or that it isn't updated as often as you need. I don't see myself talking to chatbots frequently, but I can think of two cases this year that made me give up on using a product because I was going through a difficulty; I tried to talk to customer service, and besides not being given the option to speak to a human, the bot would only return "I don't have an answer, please try asking differently."

The money I would spend on these products wouldn't pay for a customer rep, but I'm sure that the cost of enough users bailing on the product because of the lack of one could make a dent. In another similar situation, I've seen this replacement being successful. Self-checkout in markets with the option of paying a person gets the best of both worlds. If I am knowledgeable enough, I can use the self-checkout; if not, I can have someone help me.

This includes replacing engineers with AI. If my only work as an engineer had been writing code, my life would've been much easier over the years. Besides writing code, I'm also expected to talk to clients, understand their requirements, implement the product, deploy it, monitor it in production, solve bugs, and so on. AI can support me in most of these steps, but I don't see it replacing me, at least not in the next five years.

Early January 2023 I started messing up with OpenAI's chat gpt. I was amazed by how it would answer me in such a great way. At the time I was working on creating a branch of Codelitt's services arm to focus on maintaining Ruby on Rails applications and my first thought was "I can use it to generate blogposts!". With hindsight I realize this thought also ocurred to hundreds of people and because of that now [Google is working on removing AI generated content from search results](https://arstechnica.com/gadgets/2024/03/google-wants-to-close-pandoras-box-fight-ai-powered-search-spam/). Even thought this happened less than 15 months ago, AI evolved so much that it feels like a lifetime of events happened between then and now.

Over these last months I've been looking for opportunities to increase my company's output. For a software house, that means increasing our ability to deliver great software faster. While I have zero intentions to replace anybody on my team with AI, I intend to increase their productivity by using it. To me, a great comparison is when back in 2015 we moved away from maintaining our Linux servers to use containers from services like [Heroku](https://heroku.com/) or [Convox](https://convox.com). We didn't replace any engineer by doing that, but instead, we decreased the time spent on a problem that was already solved by somebody else.

By using tools like [Github Copilot](https://github.com/features/copilot) and [ChatGPT](https://chat.openai.com/)(which often gives me a better result than Github's one), I've seen my productivity increase at least by 30%. A great experience I had was when I was dealing with some [https://www.nginx.com/](Nginx) configurations, Copilot suggested some changes I wasn't even aware I could do, that was awesome. With that said, often it provides wrong answers too.

Another tool I was disappointed at was [V0](https://v0.dev/) by [Vercel](https://vercel.com/). It was marketed as a tool that would turn text into good react components. While I believe the technology is just starting, I was surpised with the fact that both Github Copilot and ChatGPT would give me better components.

During this time I've tried quite a few technologies. One day I had one of the directors suggesting us to use AutoGPT for some tasks, and while the idea of the tool is a great one,it just didn't live to the hype. I couldn't get anything meaningful done with it.

During this time I've personally built a few tools, only to find out later that one of the big players was already working on something like it. For instance, I built a tool that would allow anybody to integrate with their Google docs, and upload any external file, just to have Google presenting a few months later their [NotebookLM](https://blog.google/technology/ai/notebooklm-google-ai/). At the same time, many other tools like [Box](https://www.box.com/ai) started building their own version of it.

Reality is that, every major player right now is seeing the same opportunities because we are living in a Blue Sea market. When ChatGPT started processing documents I had a De Ja Vu. Back in 2019, I met a team from IBM that was selling their AI services called Watson. One of the use cases we had was "We need to read a real state contract and extract information from it". At the time, IBM was charging a few dollars for each file, around $5 if I'm not mistaken. That was prohibitive and we were unable to move forward. Then with OpenAI (and many others) we can just extract the content using a service like Box, and place it on a Vector database and that's it. I'm sure I won't spend more than a few cents on each document.

During this time, I built an open source project using LangChain to read data from either files or databases and make it available for APIs to extract information from it. That tooke me a couple of days and that is including the time I used to learn Python. 5 years ago that was just a dream.

Going back to the beginning, I'm still in the look out for opportunities with AI. What I noticed is that, there is an infinite number of possibilities right now, and more than enough people spending money on those. The hardest part is finding out what is the best problem that we can solve with the current technology because again, most companies are dying before they are able to deliver anything.

Back in 2020, we invested on a company that promised to solve the problem of chatbots. Their goal was to create a proper chatbot that could be easily trained. Even though now we have all the technology to do that, most companies can't achieve it well. Most user experiences I've had with chatbots have been a poor one to say the least. Thus removing the option of talking to a person will most likely damage your company user experience, but adding a bot as an option will most likely help most customers while also decreasing costs.

I've found out that to solve real problems, we still need to hire machine learning engineers. Every day we have new APIs as a service like Azure's sentiment API and many others, but by using generalist APIs like OpenAi's, won't solve the problems we face. For instance, once day we had to create --

There are several small things that can be automated with or without AI

- Customer notifications based on certain events. An example is a nutritionist who reached out to me to automate her client confirmation flow. The idea was to connect to her google calendar, extract the information about a commitment and get a confirmation with the customer about it

-
