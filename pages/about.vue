<template>
    <div class="container grid-xl">
        <div class="columns">
            <div class="column col-md-12 col-4">
                <h2>A.M.A.</h2>
                <small>Quick question card for potential buyers</small><br><br><br>
                <mark><strong>Why the back-end ?</strong></mark>
                <p>
                    It's safe to say I enjoy the Front-end, creating experiences, responsive,
                    optimized and feature rich web environments for the users to enjoy.
                    The problems occurred when the back-end code was problematic and it wasn't
                    the right fit for our front-end the designers are creating, the lack of
                    response and optimization issues forced my hand to grab the back-end and make
                    it the right fit for our problems.
                </p>
                <mark><strong>Greatest weakness ?</strong></mark>
                <p>
                  I never focus into spending the 10k hours into mastering one thing. One can say
                  my greatest weakness is not being able to restrict myself from learning the entire stack..
                </p>
                <mark><strong>Biggest advantage ?</strong></mark>
                <p>
                  It's absolutely the same as my greatest weakness. My limitless desire to learn more and more
                  technologies, keeping my current stack up to date, adding new technologies, throwing the outdated ones.
                  I never mastered Angular 1, cause since than I went through Angular 2 and 4, React and stopped myself where
                  I am currently - Vuejs as prefered reactive framework.
                </p>
            </div>
            <div class="column col-md-12 col-8">
                <h2>Who is Tsvetan Topalov? <nuxt-link to="/resume" class="btn">Resume</nuxt-link> </h2>
                <p>
                    A place to learn more about me, than my parents know.
                </p>
                <h4>Late years</h4>
                <p>
                  Switched to far more professional web technologies. Operating with huge dev stack, but favoring few technologies and frameworks.
                </p>
                <h4>Short bio</h4>
                <p>
                    I can sort out few 'keywords'. Let's see -
                    <mark>geek</mark>, <mark>developer</mark>, <mark>designer</mark>,
                    <mark>tech ninja</mark>, <mark>one-man-army</mark>, <mark>the IT guy</mark>. The short bio could include some stuff from
                    my resume like: Proficient in dozens of programming languages, speaking 4 ( fluently 2 ). Interested in
                    everything under the <strong>tech</strong> category. Done everything from design, development, deployment,
                    support, optimization,running own business, system & network administration, accounting, SaaS operations
                    and much more. For more check the long one...
                </p>
                <h4>Long bio</h4>
                <p>
                    What have I done in my 'early' years..
                </p>
                <ul>
                    <li>Age 0 - 14: I wasted so much time not doing what I should've ..</li>
                    <li>At 14: Created my first 'website', page with 70 GIF images and shiny effects, still gets excited about the 'new fancy WYSIWYG' editors, but prefer to write stuff on my own</li>
                    <li>At 15: Part of reverse engineering team for a pirated World of Warcraft server core. Successfully packed the core for production, used by tons of server handling millions of players. Written in C++ with tons of lua scripting.</li>
                    <li>At 15: Started getting more into the back-end of web development. Realized how easy PHP is..</li>
                    <li>At 15: Bought my first domain</li>
                    <li>At 15: Created some CMS based websites, for my fellow gamers (e107, phpBB, joomla)</li>
                    <li>At 15: Fulfilled my dream to create my own community using the same World of Warcraft engine, ran a 50,000 people community and administrated online server with over 2000 concurrent users.</li>
                    <li>At 16: Bought my 10th domain, started creating small websites for family and friends</li>
                    <li>At 16: Just like being a just passionate gamer wasn't enough aimed to some other targets like Valve's Counter Strike and Maya's Gunz. Creating enormous communities and gaming servers with authored scripting in C and pawn scripting. Started running my first redhat based server machines and getting deeper into linux.</li>
                    <li>At 16: Began working with teams in order to achieve higher goals, appointing community managers and using team hierarchy. First collaborative projects with other developers.</li>
                    <li>At 17: Moving past the easier things - still gaming is .. my thing, but creating stuff for gamers is my life. Ran some of the biggest bulgarian gaming communities, creating tons of world gaming class servers (some ranked 1-10th in the world) - all thanks to the authored scripting.</li>
                    <li>At 17: Started working with more advanced CMS', got familiar with vBulletin, created several plugins, began investing what we made from donations into studying more technologies, advertising. Ran my first advertising campaigns.</li>
                    <li>At 17: Started doing small freelance jobs for 'beer cash'. Mostly configuration, installing CMS', fixing web servers.</li>
                    <li>At 17: Got my first 'larger freelance job' - to build a whole web site for a company.</li>
                    <li>At 18: Began gray 'hacking' attempts. First 20 defaced sites.</li>
                    <li>At 18: Went with the DDoS hype. Used my first RAT (poison ivy I think) and got really impressed. Started writing my own remote administration software.</li>
                    <li>At 18: Figured out about botnets, creating, running them. There's possibility that I had one of my own.</li>
                    <li>At 18: First larger scale DDoS attacks, aimed at gaming servers. First calls from internet providers.</li>
                    <li>At 18: Started doing more freelance jobs than actually working on my own projects.</li>
                    <li>At 18: Began getting into front-end and web design. Had already created tons of websites mostly some CMS based, wrote several small modules and plugins for phpBB, WordPress and Joomla for clients. First time using the knowledge I never thought I had and got really excited.</li>
                    <li>At 18: Met with perl & python. Writing tons of tiny scripts to run gaming servers and automatize operations. Got really impressed by the performance, but at the time what really got me was getting into the CSS and Javascript because of the visual impression it left at me that stays up to this day.</li>
                    <li>At 19: Started working on reverse engineering the core of NCSoft's Aion, part of the dev teams of several of the first ever server emulators. Figured we can do better and formed a team of 2 Netherlands' guys and a Bulgarian colleague in order to make a better core. Eventually it blew and we had formed a developer community with 2000+ people. My first experience with Java.</li>
                    <li>At 19: I was mostly working now with forum board systems, modding, themes, plugins - had my fair share in working with phpBB, vBulleting, Burning Board, IPBoard and more..</li>
                </ul>
                <small>There is so much more, it's hard to build the timeline.. I will update it soon /06.06.2017/ </small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        transition: 'bounce',
        head () {
          return {
            title: 'About',
          }
        },
    }
</script>
