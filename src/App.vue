<template>
  <div id="app">
<yandex-map :settings="settings">
    <!--Markers-->
</yandex-map>
<vue-good-table
    :columns="columns"
    :rows="rows"/>
   <googlemaps-map
			ref="map"
			class="map"
			:center.sync="center"
			:zoom.sync="zoom"   
   
   >
  </googlemaps-map>     
  </div>

</template>


<script>
export default {
  data(){
    return {
      coords: [54, 39],
      center: {
				lat: 48.853,
				lng: 2.298,
			},
			path: [
				{
					lat: 48.853,
					lng: 2.298,
				},
				{
					lat: 48.8735,
					lng: 2.2951,
				},
			],
			options: {
			},
			userPosition: null,
			zoom: 12,
  
    
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM Do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
