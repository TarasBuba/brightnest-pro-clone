module.exports = {
  ci: {
    collect: {
      staticDistDir: './out',
      url: ['/', '/about/', '/book/', '/services/handyman/', '/services/painting/', '/privacy/', '/terms/'],
      numberOfRuns: 3,
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 1.0 }],
        'categories:best-practices': ['warn', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 1.0 }],
      },
    },
  },
};
