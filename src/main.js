window.ractive = new Ractive({
    template: `
        <div class="header clearfix">
            <h3 class="text-muted">Ractive loader test</h3>
        </div>
        <div class="row">
            <component1 />
            <component2 />
        </div>
        <footer class="footer">
            <p>&copy; 2018 Footer, Inc.</p>
        </footer>
    `,
    el: '#app',
    components: {

        // This does not work
        // component1: import(/* webpackChunkName: "component1" */'./components/component1.ractive.html'),
        // component2: import(/* webpackChunkName: "component2" */'./components/component2.ractive.html')

        component1: import(/* webpackChunkName: "component1" */'./components/component1.ractive.html').then(module => module.default),
        component2: import(/* webpackChunkName: "component2" */'./components/component2.ractive.html').then(module => module.default)
        
    },
    oncomplete(){
        console.log('Ractive instance rendered');
    }
});