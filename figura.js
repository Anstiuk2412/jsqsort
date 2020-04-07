function figure(f) {
    this.paint =  function () {
        console.log(f);
    }
}

const figures = [ new figure('circle'), new figure('cub') ] ;

for(let q of figures) q.paint();