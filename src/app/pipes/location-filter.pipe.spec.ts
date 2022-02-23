import { LocationFilterPipe } from './location-filter.pipe';

describe('LocationFilterPipe', () => {
  const pipe = new LocationFilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should not filter', () => {
    expect(pipe.transform([{name: "", locationId: 0}, {name: "", locationId: 0}])).toHaveSize(2);
    expect(pipe.transform(null, 1)).toBeNull();
  });

  it('should filter by location', () => {
    expect(pipe.transform([{name: "", locationId: 1}, {name: "", locationId: 0}], 1)).toHaveSize(1);
  })

});
