import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'русский',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('english').create({
      navMain: 'Main',
      navContacts: 'Contacts',
      navBlog: 'Blog',
      navAnime: 'Anime',
      navStatistic: 'Statistic',
      langMenu: 'TRANSLATION',
      pageComment: 'What are you doing here?',
      pageComment2:'This page does not exist',
      pageBtn: 'To main page',
      contactsSubs: 'Subscribers:',
      contactsArticles: 'Publications:',
      homeStatTitle: 'Site statistics',
      homeStatViewsDes: 'views',
      homeStatPostsDes: 'posts',
      homeStatAnimeDes: 'anime',
      homeStatDesDes: 'average rating',
    }),

    new MLanguage('deutsch').create({
      navMain: 'Heimat',
      navContacts: 'Kontakte',
      navBlog: 'Bloggen',
      navAnime: 'Anime',
      navStatistic: 'Statistiken',
      langMenu: 'ÜBERSETZUNG',
      pageComment: 'Was machst du hier?',
      pageComment2:'Diese seite existiert nicht',
      pageBtn: 'Zur homepage',
      contactsSubs: 'Abonnenten:',
      contactsArticles: 'Veröffentlichungen:',
      homeStatTitle: 'Website-Statistiken',
      homeStatViewsDes: 'ansichten',
      homeStatPostsDes: 'beiträge',
      homeStatAnimeDes: 'anime',
      homeStatDesDes: 'durchschnittliche bewertung',
    }),

    new MLanguage('русский').create({
      navMain: 'Главная',
      navContacts: 'Контакты',
      navBlog: 'Блог',
      navAnime: 'Аниме',
      navStatistic: 'Статистика',
      langMenu: 'ПЕРЕВОД',
      pageComment: 'Что вы здесь делаете?',
      pageComment2:'Такой страницы не существует',
      pageBtn: 'На главную',
      contactsSubs: 'Подписчиков:',
      contactsArticles: 'Публикаций:',
      homeStatTitle: 'Статистика по сайту',
      homeStatViewsDes: 'просмотров',
      homeStatPostsDes: 'постов',
      homeStatAnimeDes: 'аниме',
      homeStatDesDes: 'средняя оценка',
    })
  ]
})