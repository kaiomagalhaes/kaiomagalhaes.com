---
title: 'What do you need to know when you want to rebuild a product?'
---

# What is the current technology?

I read once that, if we don't know where we are then we'll never get where we want to be. On a recent project, we understood what this really means. We were rebuilding a product that was built using a mix of Jquery, KnockoutJS and React V15.0. One of the challenges we faced was in understanding enough of KnockoutJS to gather the product logic and transfer it to the new version. In this case, it went well. However, if the original product was in, let's say, .NET Blazor, I am sure the challenge would've been different because nobody on my team has experience with it, thus understanding the current state makes all the difference.

# What is the scope?

I am comfortable saying that the chance of someone just wanting to rebuild a product is close to zero. Most companies want to rebuild and improve, which makes sense to me. However, the scope of these changes need to be taken into consideration because they can infinitely increase the scope of the project at hand.

# Are these any third or first party integrations?

Because thid party integrations come in all shapes and sizes, it is important to understand if there are any that the current application is making use of as well as if there will be any that need to be added to the new version.

# Is the logic where it needs to be?

The first time I rebuilt a project I didn't think about asking this question, big mistake, huge. When an applications exists for more than a few years, it is safe to say that there is technical debt, decisions were made to cut time, and that nobody knows the entire scope of the application. Depending on the current architecture of the application, it might be very hard to understand it and expensive to replicate it because getting to understand everything takes time.

# will it be necessary to do a data migration?

This is an obvious one.

#
