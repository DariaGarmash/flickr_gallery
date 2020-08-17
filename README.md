# Flickr public photo gallery

### **Overview**

This is a SPA built with Flickr API [flickr.photos.search](https://www.flickr.com/services/api/explore/flickr.photos.search) method.

It fetches public photos from Flickr data base and renders as an image gallery

It is possible to search photos by tags.

### **Delelopment**

#### Technologies

- Vue CLI 3
- SCSS (scoped component styling)
- window.fetch method

#### Run a project locally

- Install packages
```
npm i
```
- Compiles and hot-reloads for development
```
yarn serve
```
- Compiles and minifies for production
```
yarn build
```
- Tests (No test included yet)

```
yarn test:unit

```

- Lints and fixes files
```
yarn lint
```


### **Scalability**

- implement infinite scroll to fetch more photos (for example [vue-infinite-loading](https://peachscript.github.io/vue-infinite-loading/guide/#installation))
- include Font Awesome Icons
- change default font
- use CSS framework in order to save time and not 'reinvent the wheel' 
- make `variables.scss` global in webpack settings
- attach `reset-scss` file in webpack settings
- consider to use lightweight library for components (for example [Buefy](https://buefy.org/))

