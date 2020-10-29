/* eslint-disable no-unused-vars */
const portfolio = document.getElementById('portfolio-cont');
const projects = portfolio.querySelectorAll('.project');

projects.forEach((project) => project.addEventListener('mouseover', (e) => {
  e.preventDefault();

  const cover = document.getElementById(`cover-${project.id}`);
  const see = document.getElementById(`see-${project.id}`);

  cover.classList.add('hidden');
  see.classList.remove('hidden');
}));

projects.forEach((project) => project.addEventListener('mouseout', (e) => {
  e.preventDefault();

  const cover = document.getElementById(`cover-${project.id}`);
  const see = document.getElementById(`see-${project.id}`);

  cover.classList.remove('hidden');
  see.classList.add('hidden');
}));

const showFV = (id) => {
  const fvProject = document.getElementById(`fv-${id}`);

  fvProject.classList.remove('hidden', 'hide_fv');
  fvProject.classList.add('show_fv');
};

const hideFV = (id) => {
  const fvProject = document.getElementById(`fv-${id}`);

  fvProject.classList.remove('show_fv');
  fvProject.classList.add('hide_fv');
  setTimeout(() => { fvProject.classList.add('hidden'); }, 400);
};

const showHM = () => {
  const hamburgerM = document.getElementById('hamburger-menu');

  hamburgerM.classList.remove('hidden');
};


const hideHM = () => {
  const hamburgerM = document.getElementById('hamburger-menu');

  hamburgerM.classList.add('hidden');
};