import { HighlightTextPipe } from './highlight-text.pipe';

describe('HighlightTextPipe', () => {
  const pipe = new HighlightTextPipe();

  it('create an instance', () => {
    const pipe = new HighlightTextPipe();
    expect(pipe).toBeTruthy();
  });

  it('wrap a simple string', () => {
    expect(pipe.transform('foobar', 'foo')).toBe('<span class="highlighted">foo</span>bar');
  });

  it('wrap an uppercase string', () => {
    expect(pipe.transform('FOOBAR', 'foo')).toBe('<span class="highlighted">FOO</span>BAR');
  });

  it('wrap an string with spaces', () => {
    expect(pipe.transform('foo bar', 'foo')).toBe('<span class="highlighted">foo</span> bar');
  });

  it('wrap multiple strings', () => {
    expect(pipe.transform('foofoo', 'foo')).toBe('<span class="highlighted">foo</span><span class="highlighted">foo</span>');
  });
});
