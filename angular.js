<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="" ng-init='hiteBlock=0'>
 <button ng-click='hiteBlock = (hiteBlock == 1 ? 0 : 1)'style='height: 50px; width: 50px; background-color: {{color}}'> Show </button>
 
 <button ng-click='color = (color == "lime" ? "blue" : "lime")'style='height: 50px; width: 50px; background-color: {{color}}'> Color </button>
  {{hiteBlock}}

<div ng-show='hiteBlock' style='background-color: {{color}}'> 
  <p>Name: <input type="text" ng-model="name"></p>
  <p>You wrote: {{ name }}</p>
</div>
</div>

</body>
</html>
