import gcp from "../assets/skills/gcp.svg";
import html from "../assets/skills/html.svg";
import photoshop from "../assets/skills/photoshop.svg";
import illustrator from "../assets/skills/illustrator.svg";
import docker from "../assets/skills/docker.svg";
import adobeXd from "../assets/skills/adobe-xd.svg";
import afterEffects from "../assets/skills/after-effects.svg";
import css from "../assets/skills/css.svg";
import angular from "../assets/skills/angular.svg";
import javascript from "../assets/skills/javascript.svg";
import nextJS from "../assets/skills/nextJS.svg";
import nuxtJS from "../assets/skills/nuxtJS.svg";
import react from "../assets/skills/react.svg";
import svelte from "../assets/skills/svelte.svg";
import typescript from "../assets/skills/typescript.svg";
import vue from "../assets/skills/vue.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import bulma from "../assets/skills/bulma.svg";
import capacitorjs from "../assets/skills/capacitorjs.svg";
import coffeescript from "../assets/skills/coffeescript.svg";
import memsql from "../assets/skills/memsql.svg";
import mongoDB from "../assets/skills/mongoDB.svg";
import mysql from "../assets/skills/mysql.svg";
import postgresql from "../assets/skills/postgresql.svg";
import tailwind from "../assets/skills/tailwind.svg";
import vitejs from "../assets/skills/vitejs.svg";
import vuetifyjs from "../assets/skills/vuetifyjs.svg";
import c from "../assets/skills/c.svg";
import cplusplus from "../assets/skills/cplusplus.svg";
import csharp from "../assets/skills/csharp.svg";
import dart from "../assets/skills/dart.svg";
import go from "../assets/skills/go.svg";
import java from "../assets/skills/java.svg";
import julia from "../assets/skills/julia.svg";
import kotlin from "../assets/skills/kotlin.svg";
import matlab from "../assets/skills/matlab.svg";
import php from "../assets/skills/php.svg";
import python from "../assets/skills/python.svg";
import ruby from "../assets/skills/ruby.svg";
import swift from "../assets/skills/swift.svg";
import adobeaudition from "../assets/skills/adobeaudition.svg";
import aws from "../assets/skills/aws.svg";
import deno from "../assets/skills/deno.svg";
import django from "../assets/skills/django.svg";
import firebase from "../assets/skills/firebase.svg";
import gimp from "../assets/skills/gimp.svg";
import git from "../assets/skills/git.svg";
import graphql from "../assets/skills/graphql.svg";
import lightroom from "../assets/skills/lightroom.svg";
import materialui from "../assets/skills/materialui.svg";
import nginx from "../assets/skills/nginx.svg";
import numpy from "../assets/skills/numpy.svg";
import opencv from "../assets/skills/opencv.svg";
import premierepro from "../assets/skills/premierepro.svg";
import pytorch from "../assets/skills/pytorch.svg";
import selenium from "../assets/skills/selenium.svg";
import strapi from "../assets/skills/strapi.svg";
import tensorflow from "../assets/skills/tensorflow.svg";
import webix from "../assets/skills/webix.svg";
import wordpress from "../assets/skills/wordpress.svg";
import azure from "../assets/skills/azure.svg";
import blender from "../assets/skills/blender.svg";
import fastify from "../assets/skills/fastify.svg";
import figma from "../assets/skills/figma.svg";
import flutter from "../assets/skills/flutter.svg";
import haxe from "../assets/skills/haxe.svg";
import ionic from "../assets/skills/ionic.svg";
import markdown from "../assets/skills/markdown.svg";
import microsoftoffice from "../assets/skills/microsoftoffice.svg";
import picsart from "../assets/skills/picsart.svg";
import sketch from "../assets/skills/sketch.svg";
import unity from "../assets/skills/unity.svg";
import wolframalpha from "../assets/skills/wolframalpha.svg";
import nodejs from "../assets/skills/nodejs.svg";
import canva from "../assets/skills/canva.svg";
import astro from "../assets/skills/astro.svg";

export const skillImages: Record<string, string> = {
  gcp: gcp,
  "node js": nodejs,
  html: html,
  photoshop: photoshop,
  illustrator: illustrator,
  docker: docker,
  "adobe xd": adobeXd,
  "after effects": afterEffects,
  css: css,
  angular: angular,
  javascript: javascript,
  "next js": nextJS,
  "nuxt js": nuxtJS,
  react: react,
  svelte: svelte,
  typescript: typescript,
  vue: vue,
  bootstrap: bootstrap,
  bulma: bulma,
  capacitorjs: capacitorjs,
  coffeescript: coffeescript,
  memsql: memsql,
  mongodb: mongoDB,
  mysql: mysql,
  postgresql: postgresql,
  tailwind: tailwind,
  vitejs: vitejs,
  vuetifyjs: vuetifyjs,
  c: c,
  "c++": cplusplus,
  "c#": csharp,
  dart: dart,
  go: go,
  java: java,
  kotlin: kotlin,
  julia: julia,
  matlab: matlab,
  php: php,
  python: python,
  ruby: ruby,
  swift: swift,
  "adobe audition": adobeaudition,
  aws: aws,
  deno: deno,
  django: django,
  firebase: firebase,
  gimp: gimp,
  git: git,
  graphql: graphql,
  lightroom: lightroom,
  materialui: materialui,
  nginx: nginx,
  numpy: numpy,
  opencv: opencv,
  "premiere pro": premierepro,
  pytorch: pytorch,
  selenium: selenium,
  strapi: strapi,
  tensorflow: tensorflow,
  webix: webix,
  wordpress: wordpress,
  azure: azure,
  blender: blender,
  fastify: fastify,
  figma: figma,
  flutter: flutter,
  haxe: haxe,
  ionic: ionic,
  markdown: markdown,
  "microsoft office": microsoftoffice,
  picsart: picsart,
  sketch: sketch,
  unity: unity,
  wolframalpha: wolframalpha,
  canva: canva,
  astro: astro,
};

export const skillsImage = (skill: string): string => {
  const skillID = skill.trim().toLowerCase();
  return skillImages[skillID] ?? "/fallback.svg"; // Imagen por defecto
};
