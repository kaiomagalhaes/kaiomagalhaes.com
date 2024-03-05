---
title: 'How to keep technical as a CTO'
---

One of my first thoughts when I became a CTO was _I won't keep up with the latest technologies anymore_. My second one was _There must be a way to keep on learning new tools while also managing people, I only need to find out how_. It is important to understand that not every CTO wants to continue being an engineer. Besides, depending on the size
of the company, it might be close to impossible for anyone in that position to keep studying while at work. There are differences between [Gustav Söderström](https://www.linkedin.com/in/gustavsoderstrom/) who is the CTO of [Spotify](https://open.spotify.com/) where they have over 3000 engineers, and myself who is the CTO of [Codelitt](https://codelitt.com/) where we have under 40 engineers. Thus my goal here is not to provide a silver bullet, but what works for a small software company.

There are several actions that I do daily to get me closer to the engineering craft:

## Participate in technical discussions on technologies I am familiar with

Because [Codelitt](https://codelitt.com/) is a software house, we have many projects running at any given time in multiple technologies. I do not expect to be versed in each technology out there, but I do expect to keep growing on the ones I've worked as an engineer, which are [Ruby on Rails](https://rubyonrails.org/), [React](https://react.dev/) and [NodeJS](https://nodejs.org/en). I take every opportunity to join my team's technical discussions on these technologies. This helps me, not only to understand their reasoning but also to understand how they are making decisions. It is always a pleasure to see engineers debate different points of view and I learn while watching it.

## Build proofs of concept on technologies I want to know more about

I build proofs of concept to test out new technologies. I don't need to have a specific goal for them, so anything anecdotal that allows me to test them is game.

Some examples

- As soon as Microsoft released the [Face API](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-identity) I built an application that
  allowed the user to upload a picture. It would recognize the face and replace that with an emoji based on the API review of the person's feelings. To my surprise,
  a couple of weeks after I build this POC, one of our customers requested us to build an application that should allow the user to search on a set of images based on emotion filters, for example: "3 happy people", "One sad couple" and so on.

- Once a customer mentioned that they didn't know how hard it would be to create an application that allowed the user to edit an image and download it.
  The curiosity got the best of me and I built an application that allowed the user to draw on top of any image they would upload.

- When I was curious about the [Twillio API](https://www.twilio.com/docs/usage/api) I built an application that could send SMS to my friends using Twillio.

- Since I got into the university to get my bachelor's degree in Software Engineering I wanted to understand how to write software for an Arduino. A few months ago I decided to make it happen. I bought some Arduino parts and built an application that would check my calendar and if I was in any meeting it would turn on a "red" light, if I was about to join it would turn on a "yellow" light, and if I am free it would turn on a "green" one. It was fun.

I've done way too many proofs of concept, but I believe they give a good idea.

## Newsletters

For quite a long time I've been using Newsletters as my primary source of news in the tech world. I like them because I can choose the topics that interest me the most and I get a curated list about them. As I write this article, these are the ones I'm receiving.

- [TLDR - Web Dev](web-version?ep=1&lc=c1d7ff82-e834-11ed-aa39-b1c615c68784&p=09b9283c-dad6-11ee-ad26-8d5ef47b0992&pt=campaign&t=1709641341&s=bc9975daec3581b1c3f4a86fd664110062e1fd87cdfdc31701593899023c4841)
- [TLDR](https://actions.tldrnewsletter.com/web-version?ep=1&lc=b6691b72-e834-11ed-8d14-15fe90968199&p=3858743c-d6d9-11ee-ac71-e71aa11a084a&pt=campaign&t=1709206602&s=6f6dbec981517cf5613a78fd73182a95cf4f4e705c868936a359627c4b4a3909)
- [Superhuman](https://www.superhuman.ai/p/apple-reportedly-sacrifices-car-plans-focus-ai)
- [Javascript weekly](https://javascriptweekly.com/issues/676)
- [Ruby weekly](https://rubyweekly.com/issues/691).

## Participate in the kickoff of every project

The kickoff of a project is a magical moment. Whenever I get a chance I try to help them as it is where the engineers are making the decisions that will haunt them until the end of the project. That is where we define the architecture, tools, and integrations. It is also a great moment to build small proofs of concept to test the technologies that will be used in case any of them is new. In one of these kickoffs I participated, I learned about [Zustand](https://github.com/pmndrs/zustand), [React Query](https://tanstack.com/query/v3/) and [Material UI](https://mui.com/material-ui/). Now I can't live without them.

## Build internal applications to help your team

Every company has its specifics that are hard to fit into pre-built software. This is an opportunity for a CTO to make all the difference to the team, while also studying and growing. Every time I see an opportunity for automation, I take that chance. I always build everything in the technology I'm most familiar with because I know that a) I'll be the one maintaining it and b) I'll build everything alone. In this experience, I've come up with a few open-source projects

- [Roadrunner](https://github.com/codelittinc/roadrunner)
- [Notifications](https://github.com/codelittinc/notifications)
- [Backstage](https://github.com/codelittinc/backstage-app)

These are the ones that are most obvious to me. With that said, the most important action you need to take to keep on learning new technologies is simply to keep looking for opportunities to learn. Every project, every engineer, every conversation is an opportunity to grow.
