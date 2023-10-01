/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 130.0, "minX": 0.0, "maxY": 1304.0, "series": [{"data": [[0.0, 130.0], [0.1, 169.0], [0.2, 284.0], [0.3, 395.0], [0.4, 420.0], [0.5, 446.0], [0.6, 492.0], [0.7, 527.0], [0.8, 586.0], [0.9, 619.0], [1.0, 666.0], [1.1, 709.0], [1.2, 767.0], [1.3, 814.0], [1.4, 856.0], [1.5, 912.0], [1.6, 933.0], [1.7, 982.0], [1.8, 1000.0], [1.9, 1049.0], [2.0, 1069.0], [2.1, 1111.0], [2.2, 1128.0], [2.3, 1138.0], [2.4, 1140.0], [2.5, 1141.0], [2.6, 1141.0], [2.7, 1144.0], [2.8, 1145.0], [2.9, 1145.0], [3.0, 1146.0], [3.1, 1146.0], [3.2, 1146.0], [3.3, 1147.0], [3.4, 1147.0], [3.5, 1147.0], [3.6, 1147.0], [3.7, 1148.0], [3.8, 1148.0], [3.9, 1148.0], [4.0, 1148.0], [4.1, 1148.0], [4.2, 1149.0], [4.3, 1149.0], [4.4, 1149.0], [4.5, 1149.0], [4.6, 1149.0], [4.7, 1150.0], [4.8, 1150.0], [4.9, 1150.0], [5.0, 1150.0], [5.1, 1150.0], [5.2, 1150.0], [5.3, 1150.0], [5.4, 1150.0], [5.5, 1150.0], [5.6, 1151.0], [5.7, 1151.0], [5.8, 1151.0], [5.9, 1151.0], [6.0, 1151.0], [6.1, 1151.0], [6.2, 1151.0], [6.3, 1151.0], [6.4, 1151.0], [6.5, 1151.0], [6.6, 1151.0], [6.7, 1152.0], [6.8, 1152.0], [6.9, 1152.0], [7.0, 1152.0], [7.1, 1152.0], [7.2, 1152.0], [7.3, 1152.0], [7.4, 1152.0], [7.5, 1152.0], [7.6, 1152.0], [7.7, 1152.0], [7.8, 1152.0], [7.9, 1152.0], [8.0, 1153.0], [8.1, 1153.0], [8.2, 1153.0], [8.3, 1153.0], [8.4, 1153.0], [8.5, 1153.0], [8.6, 1153.0], [8.7, 1153.0], [8.8, 1153.0], [8.9, 1153.0], [9.0, 1153.0], [9.1, 1153.0], [9.2, 1154.0], [9.3, 1154.0], [9.4, 1154.0], [9.5, 1154.0], [9.6, 1154.0], [9.7, 1154.0], [9.8, 1154.0], [9.9, 1154.0], [10.0, 1154.0], [10.1, 1154.0], [10.2, 1154.0], [10.3, 1154.0], [10.4, 1154.0], [10.5, 1155.0], [10.6, 1155.0], [10.7, 1155.0], [10.8, 1155.0], [10.9, 1155.0], [11.0, 1155.0], [11.1, 1155.0], [11.2, 1155.0], [11.3, 1155.0], [11.4, 1155.0], [11.5, 1155.0], [11.6, 1155.0], [11.7, 1155.0], [11.8, 1155.0], [11.9, 1155.0], [12.0, 1155.0], [12.1, 1156.0], [12.2, 1156.0], [12.3, 1156.0], [12.4, 1156.0], [12.5, 1156.0], [12.6, 1156.0], [12.7, 1156.0], [12.8, 1156.0], [12.9, 1156.0], [13.0, 1156.0], [13.1, 1156.0], [13.2, 1156.0], [13.3, 1156.0], [13.4, 1156.0], [13.5, 1156.0], [13.6, 1156.0], [13.7, 1156.0], [13.8, 1157.0], [13.9, 1157.0], [14.0, 1157.0], [14.1, 1157.0], [14.2, 1157.0], [14.3, 1157.0], [14.4, 1157.0], [14.5, 1157.0], [14.6, 1157.0], [14.7, 1157.0], [14.8, 1157.0], [14.9, 1157.0], [15.0, 1157.0], [15.1, 1157.0], [15.2, 1157.0], [15.3, 1157.0], [15.4, 1158.0], [15.5, 1158.0], [15.6, 1158.0], [15.7, 1158.0], [15.8, 1158.0], [15.9, 1158.0], [16.0, 1158.0], [16.1, 1158.0], [16.2, 1158.0], [16.3, 1158.0], [16.4, 1158.0], [16.5, 1158.0], [16.6, 1158.0], [16.7, 1158.0], [16.8, 1158.0], [16.9, 1158.0], [17.0, 1158.0], [17.1, 1158.0], [17.2, 1158.0], [17.3, 1158.0], [17.4, 1159.0], [17.5, 1159.0], [17.6, 1159.0], [17.7, 1159.0], [17.8, 1159.0], [17.9, 1159.0], [18.0, 1159.0], [18.1, 1159.0], [18.2, 1159.0], [18.3, 1159.0], [18.4, 1159.0], [18.5, 1159.0], [18.6, 1159.0], [18.7, 1159.0], [18.8, 1159.0], [18.9, 1159.0], [19.0, 1159.0], [19.1, 1159.0], [19.2, 1159.0], [19.3, 1159.0], [19.4, 1159.0], [19.5, 1159.0], [19.6, 1160.0], [19.7, 1160.0], [19.8, 1160.0], [19.9, 1160.0], [20.0, 1160.0], [20.1, 1160.0], [20.2, 1160.0], [20.3, 1160.0], [20.4, 1160.0], [20.5, 1160.0], [20.6, 1160.0], [20.7, 1160.0], [20.8, 1160.0], [20.9, 1160.0], [21.0, 1160.0], [21.1, 1160.0], [21.2, 1160.0], [21.3, 1160.0], [21.4, 1160.0], [21.5, 1160.0], [21.6, 1160.0], [21.7, 1160.0], [21.8, 1160.0], [21.9, 1160.0], [22.0, 1160.0], [22.1, 1161.0], [22.2, 1161.0], [22.3, 1161.0], [22.4, 1161.0], [22.5, 1161.0], [22.6, 1161.0], [22.7, 1161.0], [22.8, 1161.0], [22.9, 1161.0], [23.0, 1161.0], [23.1, 1161.0], [23.2, 1161.0], [23.3, 1161.0], [23.4, 1161.0], [23.5, 1161.0], [23.6, 1161.0], [23.7, 1161.0], [23.8, 1161.0], [23.9, 1161.0], [24.0, 1161.0], [24.1, 1161.0], [24.2, 1161.0], [24.3, 1162.0], [24.4, 1162.0], [24.5, 1162.0], [24.6, 1162.0], [24.7, 1162.0], [24.8, 1162.0], [24.9, 1162.0], [25.0, 1162.0], [25.1, 1162.0], [25.2, 1162.0], [25.3, 1162.0], [25.4, 1162.0], [25.5, 1162.0], [25.6, 1162.0], [25.7, 1162.0], [25.8, 1162.0], [25.9, 1162.0], [26.0, 1162.0], [26.1, 1162.0], [26.2, 1162.0], [26.3, 1162.0], [26.4, 1162.0], [26.5, 1163.0], [26.6, 1163.0], [26.7, 1163.0], [26.8, 1163.0], [26.9, 1163.0], [27.0, 1163.0], [27.1, 1163.0], [27.2, 1163.0], [27.3, 1163.0], [27.4, 1163.0], [27.5, 1163.0], [27.6, 1163.0], [27.7, 1163.0], [27.8, 1163.0], [27.9, 1163.0], [28.0, 1163.0], [28.1, 1163.0], [28.2, 1163.0], [28.3, 1163.0], [28.4, 1163.0], [28.5, 1163.0], [28.6, 1163.0], [28.7, 1163.0], [28.8, 1163.0], [28.9, 1164.0], [29.0, 1164.0], [29.1, 1164.0], [29.2, 1164.0], [29.3, 1164.0], [29.4, 1164.0], [29.5, 1164.0], [29.6, 1164.0], [29.7, 1164.0], [29.8, 1164.0], [29.9, 1164.0], [30.0, 1164.0], [30.1, 1164.0], [30.2, 1164.0], [30.3, 1164.0], [30.4, 1164.0], [30.5, 1165.0], [30.6, 1165.0], [30.7, 1165.0], [30.8, 1165.0], [30.9, 1165.0], [31.0, 1165.0], [31.1, 1165.0], [31.2, 1165.0], [31.3, 1165.0], [31.4, 1165.0], [31.5, 1165.0], [31.6, 1165.0], [31.7, 1165.0], [31.8, 1165.0], [31.9, 1165.0], [32.0, 1165.0], [32.1, 1165.0], [32.2, 1166.0], [32.3, 1166.0], [32.4, 1166.0], [32.5, 1166.0], [32.6, 1166.0], [32.7, 1166.0], [32.8, 1166.0], [32.9, 1166.0], [33.0, 1166.0], [33.1, 1166.0], [33.2, 1166.0], [33.3, 1166.0], [33.4, 1166.0], [33.5, 1166.0], [33.6, 1167.0], [33.7, 1167.0], [33.8, 1167.0], [33.9, 1167.0], [34.0, 1167.0], [34.1, 1167.0], [34.2, 1167.0], [34.3, 1167.0], [34.4, 1167.0], [34.5, 1167.0], [34.6, 1167.0], [34.7, 1167.0], [34.8, 1167.0], [34.9, 1167.0], [35.0, 1167.0], [35.1, 1167.0], [35.2, 1167.0], [35.3, 1167.0], [35.4, 1168.0], [35.5, 1168.0], [35.6, 1168.0], [35.7, 1168.0], [35.8, 1168.0], [35.9, 1168.0], [36.0, 1168.0], [36.1, 1168.0], [36.2, 1168.0], [36.3, 1168.0], [36.4, 1168.0], [36.5, 1168.0], [36.6, 1168.0], [36.7, 1168.0], [36.8, 1168.0], [36.9, 1168.0], [37.0, 1168.0], [37.1, 1169.0], [37.2, 1169.0], [37.3, 1169.0], [37.4, 1169.0], [37.5, 1169.0], [37.6, 1169.0], [37.7, 1169.0], [37.8, 1169.0], [37.9, 1169.0], [38.0, 1169.0], [38.1, 1169.0], [38.2, 1169.0], [38.3, 1169.0], [38.4, 1169.0], [38.5, 1169.0], [38.6, 1169.0], [38.7, 1169.0], [38.8, 1169.0], [38.9, 1169.0], [39.0, 1169.0], [39.1, 1169.0], [39.2, 1170.0], [39.3, 1170.0], [39.4, 1170.0], [39.5, 1170.0], [39.6, 1170.0], [39.7, 1170.0], [39.8, 1170.0], [39.9, 1170.0], [40.0, 1170.0], [40.1, 1170.0], [40.2, 1170.0], [40.3, 1170.0], [40.4, 1170.0], [40.5, 1170.0], [40.6, 1170.0], [40.7, 1170.0], [40.8, 1170.0], [40.9, 1170.0], [41.0, 1170.0], [41.1, 1170.0], [41.2, 1171.0], [41.3, 1171.0], [41.4, 1171.0], [41.5, 1171.0], [41.6, 1171.0], [41.7, 1171.0], [41.8, 1171.0], [41.9, 1171.0], [42.0, 1171.0], [42.1, 1171.0], [42.2, 1171.0], [42.3, 1171.0], [42.4, 1171.0], [42.5, 1171.0], [42.6, 1171.0], [42.7, 1171.0], [42.8, 1171.0], [42.9, 1171.0], [43.0, 1171.0], [43.1, 1171.0], [43.2, 1172.0], [43.3, 1172.0], [43.4, 1172.0], [43.5, 1172.0], [43.6, 1172.0], [43.7, 1172.0], [43.8, 1172.0], [43.9, 1172.0], [44.0, 1172.0], [44.1, 1172.0], [44.2, 1172.0], [44.3, 1172.0], [44.4, 1172.0], [44.5, 1172.0], [44.6, 1172.0], [44.7, 1172.0], [44.8, 1172.0], [44.9, 1172.0], [45.0, 1172.0], [45.1, 1172.0], [45.2, 1172.0], [45.3, 1172.0], [45.4, 1172.0], [45.5, 1172.0], [45.6, 1173.0], [45.7, 1173.0], [45.8, 1173.0], [45.9, 1173.0], [46.0, 1173.0], [46.1, 1173.0], [46.2, 1173.0], [46.3, 1173.0], [46.4, 1173.0], [46.5, 1173.0], [46.6, 1173.0], [46.7, 1173.0], [46.8, 1173.0], [46.9, 1173.0], [47.0, 1173.0], [47.1, 1173.0], [47.2, 1173.0], [47.3, 1173.0], [47.4, 1173.0], [47.5, 1173.0], [47.6, 1173.0], [47.7, 1174.0], [47.8, 1174.0], [47.9, 1174.0], [48.0, 1174.0], [48.1, 1174.0], [48.2, 1174.0], [48.3, 1174.0], [48.4, 1174.0], [48.5, 1174.0], [48.6, 1174.0], [48.7, 1174.0], [48.8, 1174.0], [48.9, 1174.0], [49.0, 1174.0], [49.1, 1174.0], [49.2, 1174.0], [49.3, 1174.0], [49.4, 1174.0], [49.5, 1174.0], [49.6, 1174.0], [49.7, 1174.0], [49.8, 1174.0], [49.9, 1174.0], [50.0, 1175.0], [50.1, 1175.0], [50.2, 1175.0], [50.3, 1175.0], [50.4, 1175.0], [50.5, 1175.0], [50.6, 1175.0], [50.7, 1175.0], [50.8, 1175.0], [50.9, 1175.0], [51.0, 1175.0], [51.1, 1175.0], [51.2, 1175.0], [51.3, 1175.0], [51.4, 1175.0], [51.5, 1175.0], [51.6, 1175.0], [51.7, 1175.0], [51.8, 1175.0], [51.9, 1175.0], [52.0, 1175.0], [52.1, 1175.0], [52.2, 1175.0], [52.3, 1176.0], [52.4, 1176.0], [52.5, 1176.0], [52.6, 1176.0], [52.7, 1176.0], [52.8, 1176.0], [52.9, 1176.0], [53.0, 1176.0], [53.1, 1176.0], [53.2, 1176.0], [53.3, 1176.0], [53.4, 1176.0], [53.5, 1176.0], [53.6, 1176.0], [53.7, 1176.0], [53.8, 1176.0], [53.9, 1176.0], [54.0, 1176.0], [54.1, 1176.0], [54.2, 1177.0], [54.3, 1177.0], [54.4, 1177.0], [54.5, 1177.0], [54.6, 1177.0], [54.7, 1177.0], [54.8, 1177.0], [54.9, 1177.0], [55.0, 1177.0], [55.1, 1177.0], [55.2, 1177.0], [55.3, 1177.0], [55.4, 1177.0], [55.5, 1177.0], [55.6, 1177.0], [55.7, 1177.0], [55.8, 1177.0], [55.9, 1177.0], [56.0, 1177.0], [56.1, 1177.0], [56.2, 1178.0], [56.3, 1178.0], [56.4, 1178.0], [56.5, 1178.0], [56.6, 1178.0], [56.7, 1178.0], [56.8, 1178.0], [56.9, 1178.0], [57.0, 1178.0], [57.1, 1178.0], [57.2, 1178.0], [57.3, 1178.0], [57.4, 1178.0], [57.5, 1178.0], [57.6, 1178.0], [57.7, 1178.0], [57.8, 1178.0], [57.9, 1178.0], [58.0, 1178.0], [58.1, 1179.0], [58.2, 1179.0], [58.3, 1179.0], [58.4, 1179.0], [58.5, 1179.0], [58.6, 1179.0], [58.7, 1179.0], [58.8, 1179.0], [58.9, 1179.0], [59.0, 1179.0], [59.1, 1179.0], [59.2, 1179.0], [59.3, 1179.0], [59.4, 1179.0], [59.5, 1179.0], [59.6, 1179.0], [59.7, 1179.0], [59.8, 1179.0], [59.9, 1179.0], [60.0, 1180.0], [60.1, 1180.0], [60.2, 1180.0], [60.3, 1180.0], [60.4, 1180.0], [60.5, 1180.0], [60.6, 1180.0], [60.7, 1180.0], [60.8, 1180.0], [60.9, 1180.0], [61.0, 1180.0], [61.1, 1180.0], [61.2, 1180.0], [61.3, 1180.0], [61.4, 1180.0], [61.5, 1180.0], [61.6, 1181.0], [61.7, 1181.0], [61.8, 1181.0], [61.9, 1181.0], [62.0, 1181.0], [62.1, 1181.0], [62.2, 1181.0], [62.3, 1181.0], [62.4, 1181.0], [62.5, 1181.0], [62.6, 1181.0], [62.7, 1181.0], [62.8, 1181.0], [62.9, 1181.0], [63.0, 1181.0], [63.1, 1181.0], [63.2, 1182.0], [63.3, 1182.0], [63.4, 1182.0], [63.5, 1182.0], [63.6, 1182.0], [63.7, 1182.0], [63.8, 1182.0], [63.9, 1182.0], [64.0, 1182.0], [64.1, 1182.0], [64.2, 1182.0], [64.3, 1182.0], [64.4, 1182.0], [64.5, 1182.0], [64.6, 1182.0], [64.7, 1182.0], [64.8, 1182.0], [64.9, 1182.0], [65.0, 1182.0], [65.1, 1183.0], [65.2, 1183.0], [65.3, 1183.0], [65.4, 1183.0], [65.5, 1183.0], [65.6, 1183.0], [65.7, 1183.0], [65.8, 1183.0], [65.9, 1183.0], [66.0, 1183.0], [66.1, 1183.0], [66.2, 1183.0], [66.3, 1183.0], [66.4, 1183.0], [66.5, 1183.0], [66.6, 1183.0], [66.7, 1184.0], [66.8, 1184.0], [66.9, 1184.0], [67.0, 1184.0], [67.1, 1184.0], [67.2, 1184.0], [67.3, 1184.0], [67.4, 1184.0], [67.5, 1184.0], [67.6, 1184.0], [67.7, 1184.0], [67.8, 1184.0], [67.9, 1184.0], [68.0, 1184.0], [68.1, 1184.0], [68.2, 1184.0], [68.3, 1185.0], [68.4, 1185.0], [68.5, 1185.0], [68.6, 1185.0], [68.7, 1185.0], [68.8, 1185.0], [68.9, 1185.0], [69.0, 1185.0], [69.1, 1185.0], [69.2, 1185.0], [69.3, 1185.0], [69.4, 1185.0], [69.5, 1185.0], [69.6, 1185.0], [69.7, 1185.0], [69.8, 1185.0], [69.9, 1186.0], [70.0, 1186.0], [70.1, 1186.0], [70.2, 1186.0], [70.3, 1186.0], [70.4, 1186.0], [70.5, 1186.0], [70.6, 1186.0], [70.7, 1186.0], [70.8, 1186.0], [70.9, 1186.0], [71.0, 1186.0], [71.1, 1186.0], [71.2, 1186.0], [71.3, 1186.0], [71.4, 1186.0], [71.5, 1186.0], [71.6, 1186.0], [71.7, 1187.0], [71.8, 1187.0], [71.9, 1187.0], [72.0, 1187.0], [72.1, 1187.0], [72.2, 1187.0], [72.3, 1187.0], [72.4, 1187.0], [72.5, 1187.0], [72.6, 1187.0], [72.7, 1187.0], [72.8, 1187.0], [72.9, 1187.0], [73.0, 1187.0], [73.1, 1188.0], [73.2, 1188.0], [73.3, 1188.0], [73.4, 1188.0], [73.5, 1188.0], [73.6, 1188.0], [73.7, 1188.0], [73.8, 1188.0], [73.9, 1188.0], [74.0, 1188.0], [74.1, 1188.0], [74.2, 1189.0], [74.3, 1189.0], [74.4, 1189.0], [74.5, 1189.0], [74.6, 1189.0], [74.7, 1189.0], [74.8, 1189.0], [74.9, 1189.0], [75.0, 1189.0], [75.1, 1189.0], [75.2, 1189.0], [75.3, 1189.0], [75.4, 1189.0], [75.5, 1189.0], [75.6, 1189.0], [75.7, 1189.0], [75.8, 1190.0], [75.9, 1190.0], [76.0, 1190.0], [76.1, 1190.0], [76.2, 1190.0], [76.3, 1190.0], [76.4, 1190.0], [76.5, 1190.0], [76.6, 1190.0], [76.7, 1190.0], [76.8, 1191.0], [76.9, 1191.0], [77.0, 1191.0], [77.1, 1191.0], [77.2, 1191.0], [77.3, 1191.0], [77.4, 1191.0], [77.5, 1191.0], [77.6, 1191.0], [77.7, 1191.0], [77.8, 1191.0], [77.9, 1191.0], [78.0, 1191.0], [78.1, 1192.0], [78.2, 1192.0], [78.3, 1192.0], [78.4, 1192.0], [78.5, 1192.0], [78.6, 1192.0], [78.7, 1192.0], [78.8, 1192.0], [78.9, 1192.0], [79.0, 1192.0], [79.1, 1192.0], [79.2, 1192.0], [79.3, 1192.0], [79.4, 1193.0], [79.5, 1193.0], [79.6, 1193.0], [79.7, 1193.0], [79.8, 1193.0], [79.9, 1193.0], [80.0, 1193.0], [80.1, 1193.0], [80.2, 1193.0], [80.3, 1193.0], [80.4, 1193.0], [80.5, 1193.0], [80.6, 1194.0], [80.7, 1194.0], [80.8, 1194.0], [80.9, 1194.0], [81.0, 1194.0], [81.1, 1194.0], [81.2, 1194.0], [81.3, 1194.0], [81.4, 1194.0], [81.5, 1194.0], [81.6, 1194.0], [81.7, 1195.0], [81.8, 1195.0], [81.9, 1195.0], [82.0, 1195.0], [82.1, 1195.0], [82.2, 1195.0], [82.3, 1195.0], [82.4, 1195.0], [82.5, 1195.0], [82.6, 1195.0], [82.7, 1195.0], [82.8, 1195.0], [82.9, 1195.0], [83.0, 1196.0], [83.1, 1196.0], [83.2, 1196.0], [83.3, 1196.0], [83.4, 1196.0], [83.5, 1196.0], [83.6, 1196.0], [83.7, 1196.0], [83.8, 1196.0], [83.9, 1196.0], [84.0, 1196.0], [84.1, 1196.0], [84.2, 1196.0], [84.3, 1197.0], [84.4, 1197.0], [84.5, 1197.0], [84.6, 1197.0], [84.7, 1197.0], [84.8, 1197.0], [84.9, 1197.0], [85.0, 1197.0], [85.1, 1197.0], [85.2, 1197.0], [85.3, 1198.0], [85.4, 1198.0], [85.5, 1198.0], [85.6, 1198.0], [85.7, 1198.0], [85.8, 1198.0], [85.9, 1198.0], [86.0, 1198.0], [86.1, 1198.0], [86.2, 1199.0], [86.3, 1199.0], [86.4, 1199.0], [86.5, 1199.0], [86.6, 1199.0], [86.7, 1199.0], [86.8, 1199.0], [86.9, 1199.0], [87.0, 1199.0], [87.1, 1199.0], [87.2, 1199.0], [87.3, 1200.0], [87.4, 1200.0], [87.5, 1200.0], [87.6, 1200.0], [87.7, 1200.0], [87.8, 1200.0], [87.9, 1200.0], [88.0, 1200.0], [88.1, 1201.0], [88.2, 1201.0], [88.3, 1201.0], [88.4, 1201.0], [88.5, 1201.0], [88.6, 1201.0], [88.7, 1202.0], [88.8, 1202.0], [88.9, 1202.0], [89.0, 1202.0], [89.1, 1202.0], [89.2, 1202.0], [89.3, 1202.0], [89.4, 1203.0], [89.5, 1203.0], [89.6, 1203.0], [89.7, 1203.0], [89.8, 1203.0], [89.9, 1203.0], [90.0, 1203.0], [90.1, 1204.0], [90.2, 1204.0], [90.3, 1204.0], [90.4, 1204.0], [90.5, 1204.0], [90.6, 1204.0], [90.7, 1205.0], [90.8, 1205.0], [90.9, 1205.0], [91.0, 1205.0], [91.1, 1205.0], [91.2, 1205.0], [91.3, 1206.0], [91.4, 1206.0], [91.5, 1206.0], [91.6, 1207.0], [91.7, 1207.0], [91.8, 1207.0], [91.9, 1207.0], [92.0, 1207.0], [92.1, 1207.0], [92.2, 1208.0], [92.3, 1208.0], [92.4, 1208.0], [92.5, 1208.0], [92.6, 1208.0], [92.7, 1209.0], [92.8, 1209.0], [92.9, 1209.0], [93.0, 1209.0], [93.1, 1210.0], [93.2, 1210.0], [93.3, 1210.0], [93.4, 1210.0], [93.5, 1211.0], [93.6, 1211.0], [93.7, 1211.0], [93.8, 1212.0], [93.9, 1212.0], [94.0, 1212.0], [94.1, 1212.0], [94.2, 1212.0], [94.3, 1213.0], [94.4, 1213.0], [94.5, 1213.0], [94.6, 1214.0], [94.7, 1214.0], [94.8, 1215.0], [94.9, 1215.0], [95.0, 1215.0], [95.1, 1216.0], [95.2, 1216.0], [95.3, 1217.0], [95.4, 1217.0], [95.5, 1217.0], [95.6, 1218.0], [95.7, 1219.0], [95.8, 1219.0], [95.9, 1219.0], [96.0, 1220.0], [96.1, 1220.0], [96.2, 1221.0], [96.3, 1221.0], [96.4, 1222.0], [96.5, 1223.0], [96.6, 1224.0], [96.7, 1224.0], [96.8, 1225.0], [96.9, 1226.0], [97.0, 1227.0], [97.1, 1227.0], [97.2, 1228.0], [97.3, 1229.0], [97.4, 1230.0], [97.5, 1231.0], [97.6, 1232.0], [97.7, 1233.0], [97.8, 1234.0], [97.9, 1236.0], [98.0, 1236.0], [98.1, 1238.0], [98.2, 1239.0], [98.3, 1240.0], [98.4, 1241.0], [98.5, 1242.0], [98.6, 1243.0], [98.7, 1243.0], [98.8, 1244.0], [98.9, 1245.0], [99.0, 1247.0], [99.1, 1250.0], [99.2, 1251.0], [99.3, 1253.0], [99.4, 1255.0], [99.5, 1258.0], [99.6, 1258.0], [99.7, 1273.0], [99.8, 1287.0], [99.9, 1301.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 100.0, "maxY": 4697.0, "series": [{"data": [[600.0, 13.0], [700.0, 11.0], [200.0, 6.0], [800.0, 11.0], [900.0, 17.0], [1000.0, 14.0], [1100.0, 4697.0], [300.0, 5.0], [1200.0, 696.0], [1300.0, 7.0], [100.0, 6.0], [400.0, 18.0], [500.0, 12.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 35.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5478.0, "series": [{"data": [[0.0, 35.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5478.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 96.01129032258062, "minX": 1.69617738E12, "maxY": 99.6049613854436, "series": [{"data": [[1.69617738E12, 99.6049613854436], [1.69617744E12, 96.01129032258062]], "isOverall": false, "label": "search", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69617744E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 422.0, "minX": 1.0, "maxY": 1227.0, "series": [{"data": [[2.0, 1197.0], [3.0, 1213.0], [4.0, 1211.0], [5.0, 1173.0], [6.0, 1188.0], [7.0, 1200.0], [9.0, 1214.0], [10.0, 1185.0], [11.0, 1196.0], [12.0, 1200.0], [13.0, 1214.0], [14.0, 1214.0], [15.0, 1184.0], [16.0, 1227.0], [17.0, 1221.0], [18.0, 1186.0], [19.0, 1191.0], [20.0, 1184.0], [21.0, 1192.0], [22.0, 1214.0], [23.0, 1187.0], [24.0, 1209.0], [25.0, 1187.0], [27.0, 1189.5], [28.0, 488.6666666666667], [29.0, 670.0], [30.0, 1187.0], [31.0, 1189.0], [32.0, 422.0], [33.0, 1209.0], [35.0, 1197.0], [34.0, 1207.0], [37.0, 1207.0], [36.0, 1191.0], [38.0, 469.75], [39.0, 1204.0], [41.0, 1217.0], [40.0, 1201.0], [43.0, 1205.0], [42.0, 1188.0], [44.0, 496.75], [45.0, 1201.0], [47.0, 1212.0], [46.0, 1189.0], [49.0, 554.0], [48.0, 1198.0], [51.0, 1192.0], [50.0, 1204.0], [53.0, 1199.0], [52.0, 1217.0], [55.0, 643.3333333333333], [54.0, 1217.0], [56.0, 669.6666666666667], [57.0, 1219.0], [59.0, 1179.0], [58.0, 1194.0], [61.0, 694.3333333333334], [60.0, 1207.0], [62.0, 671.3333333333333], [63.0, 1194.0], [67.0, 688.6666666666667], [66.0, 1198.0], [65.0, 1207.0], [64.0, 1180.0], [68.0, 675.0], [71.0, 1199.0], [70.0, 1208.0], [69.0, 1184.0], [73.0, 696.3333333333334], [74.0, 702.0], [75.0, 1183.0], [72.0, 1205.0], [79.0, 624.4], [78.0, 1193.0], [77.0, 1206.0], [76.0, 1201.0], [83.0, 1192.0], [82.0, 1202.0], [81.0, 1199.0], [80.0, 1208.0], [85.0, 662.2], [87.0, 1204.0], [86.0, 1202.0], [84.0, 1183.0], [90.0, 873.0], [91.0, 711.25], [89.0, 1212.0], [88.0, 1192.0], [95.0, 1198.0], [93.0, 1194.0], [92.0, 1204.0], [96.0, 893.5], [97.0, 741.25], [98.0, 1223.0], [100.0, 1173.9858420268265], [1.0, 1178.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[98.79666243424656, 1167.819154725198]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 4774.0, "minX": 1.69617738E12, "maxY": 785938.3833333333, "series": [{"data": [[1.69617738E12, 785938.3833333333], [1.69617744E12, 228073.95]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69617738E12, 16451.05], [1.69617744E12, 4774.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69617744E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1165.7336765738344, "minX": 1.69617738E12, "maxY": 1175.0056451612882, "series": [{"data": [[1.69617738E12, 1165.7336765738344], [1.69617744E12, 1175.0056451612882]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69617744E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1165.6772759185567, "minX": 1.69617738E12, "maxY": 1174.9725806451615, "series": [{"data": [[1.69617738E12, 1165.6772759185567], [1.69617744E12, 1174.9725806451615]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69617744E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.06370967741935475, "minX": 1.69617738E12, "maxY": 0.2176456821904997, "series": [{"data": [[1.69617738E12, 0.2176456821904997], [1.69617744E12, 0.06370967741935475]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69617744E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 130.0, "minX": 1.69617738E12, "maxY": 1304.0, "series": [{"data": [[1.69617738E12, 1304.0], [1.69617744E12, 1229.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69617738E12, 1205.0], [1.69617744E12, 1200.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69617738E12, 1251.2600000000002], [1.69617744E12, 1214.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69617738E12, 1220.0], [1.69617744E12, 1206.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.69617738E12, 130.0], [1.69617744E12, 1145.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69617738E12, 1175.0], [1.69617744E12, 1174.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69617744E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 408.0, "minX": 41.0, "maxY": 1235.0, "series": [{"data": [[74.0, 866.0], [41.0, 408.0], [83.0, 1187.0], [82.0, 1193.0], [80.0, 1235.0], [84.0, 1180.0], [85.0, 1171.5], [86.0, 1171.0], [87.0, 1171.0], [88.0, 1173.0], [89.0, 1160.0], [50.0, 1199.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 408.0, "minX": 41.0, "maxY": 1235.0, "series": [{"data": [[74.0, 865.0], [41.0, 408.0], [83.0, 1187.0], [82.0, 1193.0], [80.0, 1235.0], [84.0, 1180.0], [85.0, 1171.0], [86.0, 1171.0], [87.0, 1171.0], [88.0, 1173.0], [89.0, 1160.0], [50.0, 1199.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 89.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 19.0, "minX": 1.69617738E12, "maxY": 72.88333333333334, "series": [{"data": [[1.69617738E12, 72.88333333333334], [1.69617744E12, 19.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69617744E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 20.666666666666668, "minX": 1.69617738E12, "maxY": 71.21666666666667, "series": [{"data": [[1.69617738E12, 71.21666666666667], [1.69617744E12, 20.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69617744E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 20.666666666666668, "minX": 1.69617738E12, "maxY": 71.21666666666667, "series": [{"data": [[1.69617738E12, 71.21666666666667], [1.69617744E12, 20.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69617744E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 20.666666666666668, "minX": 1.69617738E12, "maxY": 71.21666666666667, "series": [{"data": [[1.69617738E12, 71.21666666666667], [1.69617744E12, 20.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69617744E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

