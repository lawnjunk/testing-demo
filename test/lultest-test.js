describe('lulwat it should wat', function(){
  beforeEach(() => {
    angular.mock.module('demoApp')
    angular.mock.inject(($controller) => {
      this.cntr = new $controller('PlayerController')
    })
  })

  it('should wat', () => {
    expect(this.cntr.player.name).toBe('slug');
  })
})
