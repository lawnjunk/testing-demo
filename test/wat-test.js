describe('lulwat it should wat', function(){
  let fakeScope
  beforeEach(() => {
    angular.mock.module('demoApp')
    angular.mock.inject(($controller, $rootScope) => {
      fakeScope = $rootScope.$new()
      this.cntr = new $controller('Wat', {$scope: fakeScope})
    })
  })

  it('should wat', () => {
    console.log('this.cntr', this.cntr.lul);
    //console.log(fakeScope)
    console.log(fakeScope.lul)

    expect(fakeScope.lul).toBe('grr')
  })
})

