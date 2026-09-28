import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		paths: {
			base: '/pdf-editor'
		},
		adapter: adapter({ fallback: '404.html' })
	}
};

export default config;
