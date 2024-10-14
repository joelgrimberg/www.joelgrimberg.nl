---
title: 'The place of Cypress in the tech radar'
description: 'on where to place Cypress in the tech radar'
pubDate: '2024-11-10'
heroImage: '/cypress-techradar.png'
---

Cypress is a great framework for automating E2E tests and Component tests. On
04-22-2015 it was first spotted in Github (v0.5.6) and was a rising star for
years.

Reasons for it's popularity where:

-   Easy to use
-   Easy to setup
-   Epic debugging capabilities
-   Great documentation / API
-   Great community
-   Great integration with CI/CD pipelines
-   A nice Dashboard

## Easy to use

Because of the ease of use, it had a great adoption rate among QA engineers and
developers. Cypress made the 'gap' between QA and developers smaller, because
developers could write tests as well, and even write tests while seeing the
tests run in the browser. This was a great feature, comparing to the 'old' way
of writing tests in Selenium, where you had to write tests in a different
language or 'disconnected' from the browser.

## Easy to set up.

Creating the first tests in Cypress is easy. Installing Cypress into a project
can be achieved by a single shell command. Setting up the E2E tests in a
pipeline is also easy, because of the great integration with CI/CD pipelines: A
docker image with Cypress installed can be used to run the tests in a pipeline.

## Epic debugging capabilities

Coming from the 'old' way of writing tests in Selenium, debugging tests was a
breeze in Cypress. You could see the tests run in the browser, and you could
easily see the state of the application at any given time in the test and use
the browser's dev tools to debug the application.

## Great documentation / API

The Cypress documentation stood out because of the great examples and the great
explanation of the API. Looking back we can say Cypress was one of the leading
initiatives in writing great documentation. Some developers had some issues with
the API, because of the [the asynchronous natuture of cypress]
(https://learn.cypress.io/cypress-fundamentals/understanding-the-asynchronous-nature-of-cypress),
which has some quirks and side effects. But once you get the hang of it, it is a
great API to work with.

## Great community

Cypress has a [Discord-community](https://discord.com/invite/cypress) where you
can ask questions and help out others in their journey of using Cypress. What I
experience is that their are still a lot of companies that struggle with writing
tests in Cypress. The 'core' of the struggle does not lie in the framework
itself, but in automation experience itself. I can continue for a while about
the great things of Cypress, but something changed.

## A nice Dashboard to see the results of the tests

With the Cypress Dashboard you could see the results of the tests in a nice
dashboard, see the meta data of the tests, spot flaky tests and spot any
patterns. For me the best feature of the dashboard was the automatic
paralellization of the testsuite. With this feature the Dashboard would
distribute the tests over multiple machines, and run the tests in parallel. This
all based on the 'weight' of the tests. This was a great feature, because it
would speed up the pipelines and thus would speed up the feedback loop, and
would therefore nudge developers to commit more often.

## The Change

Around may 2024, Playwright took over the 'spotlight' of Cypress. Playwright,
created by Microsoft, overtook Cypress in number of downloads. My guess is that
because of Cypress the company focussing more and more on the Dashboard (which
got rebranded to 'Cypress Cloud' after the first VC round finished), the core of
Cypress was neglected, fewer features were added to the framework itself, and
less bugs where fixed. In the same time Playwright was moving fast, adding
features, fixing bugs, and getting more and more adoption. Boilerplate
frameworks like Create React App and others starting moving from Cypress to
Playwright, which even more accelerated the adoption of Playwright.

## The Future

Cypress the open source project is still very much alive. Many 'slower moving'
companies are still using Cypress and investing in training their employees in
Cypress. For me, the uncertainty lies in the intertwined relationship between
Cypress the company and Cypress the open source project. What will happen if the
Cypress Cloud will not return enough revenue to keep the company afloat? There
lies for me the uncertainty of the future of Cypress.

As a Cypress Trainer I still see a lot of value in the Cypress framework. When
people start their QA Automation journey, I still recommend them to start with
Cypress, depending on the context of the company. If the company is a 'fast
moving' company, I would recommend them to start with Playwright, because of the
great features and the great adoption rate.

In many training sessions, I see that many trainees do not struggle with the
Cypress API as such, but with the base knowledge of automation. They struggle
with the concepts of Automation, the browser, IDE, etc. For me, the Cypress
training is the first step in the journey of automation, and not the last step.

## The Tech Radar

So where to place Cypress in the tech radar? I would say that Cypress is still a
great framework, but it is not the 'hot' framework anymore. It is a mature
framework, with a great community, great documentation, and great debugging
features. Looking at the Tech Radar, I would say that Cypress is a stable
product, still worth holding on to, when it is already part of your stack. But
when you are starting a new project and you have the freedom and context to
choose, I would advise you to give both Cypress and Playwright a try, and see
what fits best in your context.
