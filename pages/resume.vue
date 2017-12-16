<template>
    <div id="portfolio" class="container grid-xl">
        <div class="columns">
            <div class="column col-md-12 col-9">
                <ul class="resume">
                    <li><img src="https://github.com/tsvetowntopalov/tsvetowntopalov.github.io/blob/master/resume/cv_1.jpg?raw=true" /></li>
                    <li><img src="https://github.com/tsvetowntopalov/tsvetowntopalov.github.io/blob/master/resume/cv_2.jpg?raw=true" /></li>
                </ul>
            </div>
            <div class="column col-md-12 col-3 aside" style="padding:0 .4rem;margin-bottom:1rem;">
                <a href="https://github.com/tsvetowntopalov/tsvetowntopalov.github.io/raw/master/resume/resume.pdf"
                   target="_blank"
                   class="btn btn-lg btn-primary badge"
                   data-badge="9.46 MB">
                   Download in .pdf
                 </a>
                <br />
                <br />
                <a href="https://github.com/tsvetowntopalov/tsvetowntopalov.github.io/raw/master/resume/resume-small.pdf"
                   target="_blank"
                   class="btn btn-sm badge"
                   data-badge="2.24 MB">
                   Download in .pdf
                 </a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    transition: 'bounce',
    head () {
      return {
        title: 'Resume',
      }
    },
  }
</script>
