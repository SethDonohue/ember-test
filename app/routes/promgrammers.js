import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Guy 1', 'Girl 1', 'Sam Harris'];
  }
});
