// You can look for "data-concept-id" on any stream page to find its UUID,
// and then prefix this with 'thing/' to use it below.
//
// EXAMPLES:
//
// Graphics (Methode list): 'list/graphics'
// World: 'thing/d8009323-f898-3207-b543-eab4427b7a77'
// UK: 'thing/98815f9a-0c35-3824-98fb-f134965f56b7'

export default (environment = 'development') => ({ // eslint-disable-line
  relatedContent: [
    { rows: 1, list: 'list/26de7772-05e5-11e8-9650-9c0ad2d7c5b5' },
    { rows: 1, list: 'thing/2aad0802-ed12-3323-99b0-7f3268ac36b9' },
  ],
});
