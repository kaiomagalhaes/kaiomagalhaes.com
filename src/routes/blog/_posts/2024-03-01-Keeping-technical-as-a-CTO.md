---
title: 'Keeping technical as a CTO'
---

One of my first thoughts when I became a CTO was _I won't keep up with the latest technologies anymore_. My second one was _There must be a way to keep on learning new tools while also managing people, I only need to find out how_. It is important to understand that not every CTO wants to continue being an engineer. Besides, depending on the size
of the company, it might be close to impossible for anyone in that position to keep studying while at work. There are differences between [Gustav Söderström](https://www.linkedin.com/in/gustavsoderstrom/) who is the CTO of [Spotify](https://open.spotify.com/) where they have over 3000 engineers, and myself who is the CTO of [Codelitt](https://codelitt.com/) where we have under 40 engineers. Thus my goal here is not to provide a silver bullet, but what works for a small software company.

There are several actions that I do on a daily basis to get me closer to the engineering craft:

## Participate in technical discussions on technologies I am familiar with

Because [Codelitt](https://codelitt.com/) is a software house, we have many projects running at any given time in multiple technologies. I do not expect to be versed in each technology out there, but I do expect to keep growing on the ones I've worked as an engineer, which are [Ruby on Rails](https://rubyonrails.org/), [React](https://react.dev/) and [NodeJS](https://nodejs.org/en). I take every opportunity to join my team's technical discussions on these technologies. This helps me, not only to understand their reasoning, but also to understand how they are making decisions. It is always a pleasure to see engineers debate differents point of view and I learn while watching it.

## Build proofs of concept on technologies I want to know more about

I build proofs of concept to test out new technologies. I don't need to have a specific goal for them, so anything anecdotal that allows me to test them is game.

Some examples

- As soon as Microsoft released the [Face API](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-identity) I built an application that
  allowed the user to upload a picture. It would recognize the face and replace that with an emoji based on the API review of the person's feeling. To my surprise,
  a couple of weeks after I build this POC, one of our customers requested us to build an application that should allow the user to search on a set of images based on emotion filters, for example: "3 happy people", "One sad couple" and so on.

- Once a customer mentioned that they didn't know how hard it would be to create an applicaton that allowed the user to edit an image and download it.
  The curiosity got the best of me and I built an application that allowed the user to draw on top of any image they would upload.

- When I was curious about the [Twillio API](https://www.twilio.com/docs/usage/api) so I builT an application that could send SMS to my friends using Twillio.

- Since I got into the university to get my bachelor degree in Software Engineering I wanted to understand how to write software for an Arduino. A few months go I decided to make it happen. I bought some arduino parts and built an application that would check my calendar and if I was in any meeting it would turn a "red" light, if I was about to join it would turn on an "yellow" light, and if I am free it would turn on a "green" one. It was fun.

I've done way too many proofs of concept, but I believe they give a good idea.

## Newsletters

For quite a long time I've been using Newsletters as my primary source of news in the tech world.

- I sign news letter on the technologies I follow. Because they are curated content with my specific target, it makes it easier for me to follow what is important to me.
  . At the moment of this writting I receive from
- - [TLDR - Web Dev](web-version?ep=1&lc=c1d7ff82-e834-11ed-aa39-b1c615c68784&p=09b9283c-dad6-11ee-ad26-8d5ef47b0992&pt=campaign&t=1709641341&s=bc9975daec3581b1c3f4a86fd664110062e1fd87cdfdc31701593899023c4841)
- - [TLDR](https://actions.tldrnewsletter.com/web-version?ep=1&lc=b6691b72-e834-11ed-8d14-15fe90968199&p=3858743c-d6d9-11ee-ac71-e71aa11a084a&pt=campaign&t=1709206602&s=6f6dbec981517cf5613a78fd73182a95cf4f4e705c868936a359627c4b4a3909)
- - [Superhuman](https://www.superhuman.ai/p/apple-reportedly-sacrifices-car-plans-focus-ai)
- - [Javascript weekly](https://javascriptweekly.com/issues/676)
- - [Ruby weekly](https://rubyweekly.com/issues/691).

- I take every opportunity to be part of a project kick off where my engineers are creating the base structure for the data flow, libraries and tools.
- I built internal applications

One of the biggest illusions in programming is that we can evolve just by working. In my 13 years of experience, I came to realize that
there is a big growth when we start in a project or a new tech stack, but as soon as we get confortable with it we stop making progress.
The good side is that once we get comfortable with a technology we can build and maintain projects way better. The bad side is that
it is common for us to find outselves in a comfort zone.

During my first two years working in a software house, I had to jump in from one project to another every 2 or 3 months. This meant that
I was constantly being challenged. At some point I started working on a project that became a 2 years long one, and as I expected,
after a few months into it I knew almost everything on the technical side to execute on the tasks at hand. Thus to learn new things
I had to resume studying the tech stack, read blogposts and go through the documentations. Just working wouldn't lead me anywhere new.

When I became a CTO, this only got worse. I would overview teams and projects in different tech stacks. On a given day I would go from
reviewing a Ruby on Rails pull request, to a React architecture and to understand a bug in a Golang one. It was tough. While many may think
that this was a good recipe to keep growing technically, it wasn't. Reality is that once someone has a good knowledge about programming languages
they start feeling the same. The main problem happens between the definitions of what make each one. The details mostly. The main problem happens
when we had new projects in new frameworks that I had zero knowledge on. Flutter for instance, I couldn't transfer my react knowledge to Flutter.
Even though Flutter is in Dart and Dart is close to Javascript, understading the entire system would require a lot of time.v
Back in 2017 when I was starting to interview people, I came across one engineer that had more than 15 years of experience. To my surprise, I realized that
it isn't uncommon for people to stop learning once they find themselves in a stable job. Projects in maintenance mode are notorious for it.
In my first engineering job I was a maintaner of a Groovy on Grails application for two years, soon after that I went on to build my first production
level project from scratch and the different was night and day.

While watching engineers over time I found the same pattern over and over. The ones that saw themselves as builders and took pride on their work, were
more often than not the ones that would take time to study and keep sharpenning their skills.

One suggestion I give to every junior engineer is to start a project from scratch. Create a To Do app or anything that they might want. The important
part is to do it from scratch. Whenever I'm starting on a new technology that's what I do.

Now, going back to the topic, when the most important part of our work is to manage people, our engineering skills might go sideways. Which is why
it is important to have a framework in place to keep evolving technically. Of course, this only applies to those who want it.

Mine goes as follow:
