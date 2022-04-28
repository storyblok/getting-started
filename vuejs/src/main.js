import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import App from './App.vue';
import Grid from './components/Grid.vue';
import Page from './components/Page.vue';
import Teaser from './components/Teaser.vue';
import Feature from './components/Feature.vue';

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: '9I0NMaGJZQaJQ4Qzmm5cHwtt',
  use: [apiPlugin],
});

app.component('Grid', Grid);
app.component('Page', Page);
app.component('Teaser', Teaser);
app.component('Feature', Feature);

app.mount('#app');
