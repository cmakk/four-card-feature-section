const context = {
  features: [
    {
      name: 'Supervisor',
      description: 'Monitors activity to identify project roadblocks',
      image: 'images/icon-supervisor.svg',
      alt: 'magnifying glass icon',
      num: 1
    },
    {
      name: 'Team Builder',
      description: 'Scans our talent network to create the optimal team for your project',
      image: 'images/icon-team-builder.svg',
      alt: 'house icon',
      num: 2
    },
    {
      name: 'Karma',
      description: 'Regularly evaluates our talent to ensure quality',
      image: 'images/icon-karma.svg',
      alt: 'lightbulb icon',
      num: 3
    },
    {
      name: 'Calculator',
      description: 'Uses data from past projects to provide better delivery estimates',
      image: 'images/icon-calculator.svg',
      alt: 'graph icon',
      num: 4
    }
  ]
};

// Handlebars
const source = document.getElementById("templateHB").innerHTML;
const template = Handlebars.compile(source);
const compiledHtml = template(context);
document.getElementById("featurescard").innerHTML = compiledHtml;

