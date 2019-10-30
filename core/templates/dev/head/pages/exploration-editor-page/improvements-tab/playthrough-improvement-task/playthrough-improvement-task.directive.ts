// Copyright 2019 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Playthrough Improvement task directive.
 */

require('domain/utilities/UrlInterpolationService.ts');
require('services/PlaythroughIssuesService.ts');

angular.module('oppia').directive('playthroughImprovementTask', [
  'UrlInterpolationService', function(UrlInterpolationService) {
    return {
      restrict: 'E',
      scope: {
        getData: '&data',
      },
      templateUrl: UrlInterpolationService.getDirectiveTemplateUrl(
        '/pages/exploration-editor-page/improvements-tab/' +
        'playthrough-improvement-task/' +
        'playthrough-improvement-task.directive.html'),
      controller: [
        '$scope', 'PlaythroughIssuesService',
        function($scope, PlaythroughIssuesService) {
          $scope.openPlaythroughModal = function(playthroughId, index) {
            PlaythroughIssuesService.openPlaythroughModal(playthroughId, index);
          };
        }
      ]
    };
  }
]);
