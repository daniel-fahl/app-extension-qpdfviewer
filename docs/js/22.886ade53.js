(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{dce1:function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <q-page class=\"flex flex-center\">\n    <q-pdfviewer\n      v-model=\"show\"\n      type=\"pdfjs\"\n      :src=\"updatedSrc\"\n      content-class=\"absolute\"\n    />\n  </q-page>\n</template>\n\n<style>\n</style>\n\n<script>\nexport default {\n  name: 'Page1',\n\n  data () {\n    return {\n      show: true,\n      src: 'pdf/pdf-test.pdf'\n    }\n  },\n\n  methods: {\n    // do some funky stuff because this site is\n    // using history mode with publicPath, and it makes\n    // pdfjs more comfortable using full urls\n    getLocation (source) {\n      let url = location.href\n      if (location.href[location.href.length - 1] !== '/') {\n        url += '/'\n      }\n      url += '../' + source\n      return url\n    }\n  },\n  computed: {\n    updatedSrc () {\n      if (process.env.MODE === 'electron') {\n        return '/' + this.src\n      }\n      return this.getLocation(this.src)\n    }\n  }\n}\n<\/script>\n"}}]);