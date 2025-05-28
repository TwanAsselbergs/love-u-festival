import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: '/love-u-festival'
		}
	}
};

export default config;
