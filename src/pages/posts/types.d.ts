/** @format */

type Post = {
	layout: Getter;
	title: Getter;
	pubDate: Getter;
	description: Getter;
	author: Getter;
	image: { url: string; alt: string };
	tags: Array<string>;
};
