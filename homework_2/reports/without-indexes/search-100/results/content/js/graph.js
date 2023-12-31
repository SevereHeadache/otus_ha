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
        data: {"result": {"minY": 196.0, "minX": 0.0, "maxY": 3333.0, "series": [{"data": [[0.0, 196.0], [0.1, 214.0], [0.2, 352.0], [0.3, 451.0], [0.4, 606.0], [0.5, 728.0], [0.6, 853.0], [0.7, 965.0], [0.8, 1026.0], [0.9, 1130.0], [1.0, 1192.0], [1.1, 1235.0], [1.2, 1272.0], [1.3, 1385.0], [1.4, 1475.0], [1.5, 1553.0], [1.6, 1623.0], [1.7, 1701.0], [1.8, 1737.0], [1.9, 1837.0], [2.0, 1857.0], [2.1, 1953.0], [2.2, 2012.0], [2.3, 2069.0], [2.4, 2125.0], [2.5, 2211.0], [2.6, 2230.0], [2.7, 2302.0], [2.8, 2356.0], [2.9, 2442.0], [3.0, 2501.0], [3.1, 2547.0], [3.2, 2611.0], [3.3, 2659.0], [3.4, 2705.0], [3.5, 2778.0], [3.6, 2815.0], [3.7, 2824.0], [3.8, 2826.0], [3.9, 2828.0], [4.0, 2832.0], [4.1, 2834.0], [4.2, 2836.0], [4.3, 2837.0], [4.4, 2838.0], [4.5, 2839.0], [4.6, 2840.0], [4.7, 2841.0], [4.8, 2844.0], [4.9, 2845.0], [5.0, 2846.0], [5.1, 2848.0], [5.2, 2849.0], [5.3, 2850.0], [5.4, 2852.0], [5.5, 2854.0], [5.6, 2856.0], [5.7, 2857.0], [5.8, 2857.0], [5.9, 2858.0], [6.0, 2858.0], [6.1, 2859.0], [6.2, 2860.0], [6.3, 2861.0], [6.4, 2861.0], [6.5, 2861.0], [6.6, 2863.0], [6.7, 2863.0], [6.8, 2864.0], [6.9, 2864.0], [7.0, 2864.0], [7.1, 2865.0], [7.2, 2866.0], [7.3, 2866.0], [7.4, 2866.0], [7.5, 2867.0], [7.6, 2867.0], [7.7, 2867.0], [7.8, 2868.0], [7.9, 2869.0], [8.0, 2869.0], [8.1, 2869.0], [8.2, 2869.0], [8.3, 2870.0], [8.4, 2871.0], [8.5, 2871.0], [8.6, 2872.0], [8.7, 2872.0], [8.8, 2872.0], [8.9, 2873.0], [9.0, 2873.0], [9.1, 2874.0], [9.2, 2874.0], [9.3, 2874.0], [9.4, 2875.0], [9.5, 2875.0], [9.6, 2876.0], [9.7, 2876.0], [9.8, 2876.0], [9.9, 2877.0], [10.0, 2877.0], [10.1, 2877.0], [10.2, 2878.0], [10.3, 2878.0], [10.4, 2879.0], [10.5, 2879.0], [10.6, 2879.0], [10.7, 2880.0], [10.8, 2880.0], [10.9, 2881.0], [11.0, 2881.0], [11.1, 2882.0], [11.2, 2882.0], [11.3, 2882.0], [11.4, 2883.0], [11.5, 2883.0], [11.6, 2883.0], [11.7, 2883.0], [11.8, 2884.0], [11.9, 2884.0], [12.0, 2884.0], [12.1, 2884.0], [12.2, 2884.0], [12.3, 2885.0], [12.4, 2885.0], [12.5, 2886.0], [12.6, 2886.0], [12.7, 2886.0], [12.8, 2887.0], [12.9, 2887.0], [13.0, 2888.0], [13.1, 2888.0], [13.2, 2888.0], [13.3, 2888.0], [13.4, 2889.0], [13.5, 2889.0], [13.6, 2889.0], [13.7, 2890.0], [13.8, 2890.0], [13.9, 2890.0], [14.0, 2891.0], [14.1, 2891.0], [14.2, 2892.0], [14.3, 2892.0], [14.4, 2892.0], [14.5, 2893.0], [14.6, 2893.0], [14.7, 2893.0], [14.8, 2893.0], [14.9, 2894.0], [15.0, 2894.0], [15.1, 2894.0], [15.2, 2894.0], [15.3, 2895.0], [15.4, 2895.0], [15.5, 2895.0], [15.6, 2895.0], [15.7, 2896.0], [15.8, 2896.0], [15.9, 2896.0], [16.0, 2896.0], [16.1, 2897.0], [16.2, 2897.0], [16.3, 2897.0], [16.4, 2897.0], [16.5, 2898.0], [16.6, 2898.0], [16.7, 2898.0], [16.8, 2899.0], [16.9, 2899.0], [17.0, 2899.0], [17.1, 2899.0], [17.2, 2900.0], [17.3, 2900.0], [17.4, 2900.0], [17.5, 2901.0], [17.6, 2901.0], [17.7, 2902.0], [17.8, 2903.0], [17.9, 2903.0], [18.0, 2903.0], [18.1, 2903.0], [18.2, 2903.0], [18.3, 2903.0], [18.4, 2904.0], [18.5, 2904.0], [18.6, 2904.0], [18.7, 2904.0], [18.8, 2905.0], [18.9, 2905.0], [19.0, 2906.0], [19.1, 2906.0], [19.2, 2907.0], [19.3, 2907.0], [19.4, 2908.0], [19.5, 2908.0], [19.6, 2909.0], [19.7, 2909.0], [19.8, 2909.0], [19.9, 2909.0], [20.0, 2909.0], [20.1, 2910.0], [20.2, 2910.0], [20.3, 2910.0], [20.4, 2911.0], [20.5, 2911.0], [20.6, 2911.0], [20.7, 2911.0], [20.8, 2912.0], [20.9, 2912.0], [21.0, 2912.0], [21.1, 2913.0], [21.2, 2913.0], [21.3, 2913.0], [21.4, 2913.0], [21.5, 2914.0], [21.6, 2914.0], [21.7, 2914.0], [21.8, 2914.0], [21.9, 2914.0], [22.0, 2915.0], [22.1, 2915.0], [22.2, 2915.0], [22.3, 2915.0], [22.4, 2916.0], [22.5, 2916.0], [22.6, 2917.0], [22.7, 2917.0], [22.8, 2917.0], [22.9, 2918.0], [23.0, 2918.0], [23.1, 2918.0], [23.2, 2919.0], [23.3, 2919.0], [23.4, 2919.0], [23.5, 2920.0], [23.6, 2921.0], [23.7, 2921.0], [23.8, 2921.0], [23.9, 2921.0], [24.0, 2922.0], [24.1, 2922.0], [24.2, 2922.0], [24.3, 2922.0], [24.4, 2923.0], [24.5, 2923.0], [24.6, 2923.0], [24.7, 2923.0], [24.8, 2924.0], [24.9, 2924.0], [25.0, 2924.0], [25.1, 2924.0], [25.2, 2925.0], [25.3, 2925.0], [25.4, 2925.0], [25.5, 2925.0], [25.6, 2926.0], [25.7, 2926.0], [25.8, 2926.0], [25.9, 2926.0], [26.0, 2926.0], [26.1, 2927.0], [26.2, 2927.0], [26.3, 2927.0], [26.4, 2927.0], [26.5, 2927.0], [26.6, 2928.0], [26.7, 2928.0], [26.8, 2928.0], [26.9, 2928.0], [27.0, 2929.0], [27.1, 2929.0], [27.2, 2929.0], [27.3, 2929.0], [27.4, 2929.0], [27.5, 2929.0], [27.6, 2930.0], [27.7, 2930.0], [27.8, 2930.0], [27.9, 2931.0], [28.0, 2931.0], [28.1, 2931.0], [28.2, 2932.0], [28.3, 2932.0], [28.4, 2932.0], [28.5, 2933.0], [28.6, 2933.0], [28.7, 2933.0], [28.8, 2933.0], [28.9, 2934.0], [29.0, 2934.0], [29.1, 2934.0], [29.2, 2934.0], [29.3, 2935.0], [29.4, 2935.0], [29.5, 2935.0], [29.6, 2935.0], [29.7, 2936.0], [29.8, 2936.0], [29.9, 2936.0], [30.0, 2936.0], [30.1, 2937.0], [30.2, 2937.0], [30.3, 2937.0], [30.4, 2937.0], [30.5, 2938.0], [30.6, 2938.0], [30.7, 2938.0], [30.8, 2938.0], [30.9, 2939.0], [31.0, 2939.0], [31.1, 2939.0], [31.2, 2940.0], [31.3, 2940.0], [31.4, 2940.0], [31.5, 2940.0], [31.6, 2940.0], [31.7, 2941.0], [31.8, 2941.0], [31.9, 2941.0], [32.0, 2941.0], [32.1, 2942.0], [32.2, 2942.0], [32.3, 2942.0], [32.4, 2942.0], [32.5, 2942.0], [32.6, 2943.0], [32.7, 2943.0], [32.8, 2943.0], [32.9, 2944.0], [33.0, 2944.0], [33.1, 2945.0], [33.2, 2945.0], [33.3, 2945.0], [33.4, 2945.0], [33.5, 2945.0], [33.6, 2946.0], [33.7, 2946.0], [33.8, 2946.0], [33.9, 2946.0], [34.0, 2946.0], [34.1, 2947.0], [34.2, 2947.0], [34.3, 2947.0], [34.4, 2947.0], [34.5, 2947.0], [34.6, 2948.0], [34.7, 2948.0], [34.8, 2948.0], [34.9, 2948.0], [35.0, 2948.0], [35.1, 2948.0], [35.2, 2949.0], [35.3, 2949.0], [35.4, 2949.0], [35.5, 2950.0], [35.6, 2950.0], [35.7, 2950.0], [35.8, 2950.0], [35.9, 2951.0], [36.0, 2951.0], [36.1, 2951.0], [36.2, 2951.0], [36.3, 2952.0], [36.4, 2952.0], [36.5, 2953.0], [36.6, 2953.0], [36.7, 2953.0], [36.8, 2953.0], [36.9, 2954.0], [37.0, 2954.0], [37.1, 2954.0], [37.2, 2955.0], [37.3, 2955.0], [37.4, 2955.0], [37.5, 2956.0], [37.6, 2956.0], [37.7, 2956.0], [37.8, 2956.0], [37.9, 2956.0], [38.0, 2957.0], [38.1, 2957.0], [38.2, 2957.0], [38.3, 2957.0], [38.4, 2957.0], [38.5, 2958.0], [38.6, 2958.0], [38.7, 2958.0], [38.8, 2958.0], [38.9, 2959.0], [39.0, 2959.0], [39.1, 2959.0], [39.2, 2959.0], [39.3, 2959.0], [39.4, 2959.0], [39.5, 2959.0], [39.6, 2960.0], [39.7, 2960.0], [39.8, 2960.0], [39.9, 2961.0], [40.0, 2961.0], [40.1, 2961.0], [40.2, 2962.0], [40.3, 2962.0], [40.4, 2962.0], [40.5, 2962.0], [40.6, 2962.0], [40.7, 2963.0], [40.8, 2963.0], [40.9, 2963.0], [41.0, 2963.0], [41.1, 2964.0], [41.2, 2964.0], [41.3, 2964.0], [41.4, 2964.0], [41.5, 2965.0], [41.6, 2965.0], [41.7, 2965.0], [41.8, 2966.0], [41.9, 2966.0], [42.0, 2966.0], [42.1, 2966.0], [42.2, 2966.0], [42.3, 2967.0], [42.4, 2967.0], [42.5, 2967.0], [42.6, 2968.0], [42.7, 2968.0], [42.8, 2968.0], [42.9, 2968.0], [43.0, 2968.0], [43.1, 2969.0], [43.2, 2969.0], [43.3, 2969.0], [43.4, 2969.0], [43.5, 2969.0], [43.6, 2969.0], [43.7, 2970.0], [43.8, 2970.0], [43.9, 2970.0], [44.0, 2970.0], [44.1, 2971.0], [44.2, 2971.0], [44.3, 2972.0], [44.4, 2972.0], [44.5, 2972.0], [44.6, 2972.0], [44.7, 2972.0], [44.8, 2973.0], [44.9, 2973.0], [45.0, 2974.0], [45.1, 2974.0], [45.2, 2974.0], [45.3, 2974.0], [45.4, 2974.0], [45.5, 2975.0], [45.6, 2975.0], [45.7, 2975.0], [45.8, 2976.0], [45.9, 2976.0], [46.0, 2976.0], [46.1, 2977.0], [46.2, 2977.0], [46.3, 2977.0], [46.4, 2978.0], [46.5, 2978.0], [46.6, 2978.0], [46.7, 2978.0], [46.8, 2979.0], [46.9, 2979.0], [47.0, 2980.0], [47.1, 2980.0], [47.2, 2981.0], [47.3, 2981.0], [47.4, 2981.0], [47.5, 2981.0], [47.6, 2981.0], [47.7, 2982.0], [47.8, 2982.0], [47.9, 2982.0], [48.0, 2982.0], [48.1, 2983.0], [48.2, 2983.0], [48.3, 2983.0], [48.4, 2984.0], [48.5, 2984.0], [48.6, 2984.0], [48.7, 2985.0], [48.8, 2985.0], [48.9, 2985.0], [49.0, 2985.0], [49.1, 2986.0], [49.2, 2986.0], [49.3, 2986.0], [49.4, 2986.0], [49.5, 2987.0], [49.6, 2987.0], [49.7, 2987.0], [49.8, 2987.0], [49.9, 2988.0], [50.0, 2988.0], [50.1, 2988.0], [50.2, 2988.0], [50.3, 2988.0], [50.4, 2989.0], [50.5, 2989.0], [50.6, 2989.0], [50.7, 2990.0], [50.8, 2990.0], [50.9, 2990.0], [51.0, 2990.0], [51.1, 2990.0], [51.2, 2991.0], [51.3, 2991.0], [51.4, 2991.0], [51.5, 2991.0], [51.6, 2991.0], [51.7, 2992.0], [51.8, 2992.0], [51.9, 2992.0], [52.0, 2993.0], [52.1, 2994.0], [52.2, 2994.0], [52.3, 2994.0], [52.4, 2994.0], [52.5, 2994.0], [52.6, 2995.0], [52.7, 2995.0], [52.8, 2995.0], [52.9, 2995.0], [53.0, 2995.0], [53.1, 2996.0], [53.2, 2996.0], [53.3, 2997.0], [53.4, 2998.0], [53.5, 2998.0], [53.6, 2999.0], [53.7, 2999.0], [53.8, 2999.0], [53.9, 2999.0], [54.0, 3000.0], [54.1, 3000.0], [54.2, 3000.0], [54.3, 3000.0], [54.4, 3001.0], [54.5, 3001.0], [54.6, 3001.0], [54.7, 3001.0], [54.8, 3002.0], [54.9, 3002.0], [55.0, 3002.0], [55.1, 3003.0], [55.2, 3003.0], [55.3, 3004.0], [55.4, 3004.0], [55.5, 3005.0], [55.6, 3005.0], [55.7, 3006.0], [55.8, 3006.0], [55.9, 3006.0], [56.0, 3006.0], [56.1, 3006.0], [56.2, 3007.0], [56.3, 3007.0], [56.4, 3007.0], [56.5, 3007.0], [56.6, 3007.0], [56.7, 3008.0], [56.8, 3008.0], [56.9, 3008.0], [57.0, 3009.0], [57.1, 3009.0], [57.2, 3010.0], [57.3, 3010.0], [57.4, 3010.0], [57.5, 3010.0], [57.6, 3011.0], [57.7, 3011.0], [57.8, 3011.0], [57.9, 3011.0], [58.0, 3012.0], [58.1, 3012.0], [58.2, 3012.0], [58.3, 3013.0], [58.4, 3013.0], [58.5, 3013.0], [58.6, 3014.0], [58.7, 3014.0], [58.8, 3015.0], [58.9, 3016.0], [59.0, 3016.0], [59.1, 3017.0], [59.2, 3017.0], [59.3, 3017.0], [59.4, 3018.0], [59.5, 3018.0], [59.6, 3018.0], [59.7, 3019.0], [59.8, 3019.0], [59.9, 3019.0], [60.0, 3020.0], [60.1, 3020.0], [60.2, 3020.0], [60.3, 3021.0], [60.4, 3021.0], [60.5, 3021.0], [60.6, 3021.0], [60.7, 3021.0], [60.8, 3022.0], [60.9, 3022.0], [61.0, 3022.0], [61.1, 3023.0], [61.2, 3023.0], [61.3, 3023.0], [61.4, 3024.0], [61.5, 3025.0], [61.6, 3025.0], [61.7, 3025.0], [61.8, 3025.0], [61.9, 3026.0], [62.0, 3026.0], [62.1, 3026.0], [62.2, 3026.0], [62.3, 3027.0], [62.4, 3027.0], [62.5, 3027.0], [62.6, 3028.0], [62.7, 3028.0], [62.8, 3028.0], [62.9, 3029.0], [63.0, 3029.0], [63.1, 3030.0], [63.2, 3030.0], [63.3, 3030.0], [63.4, 3030.0], [63.5, 3032.0], [63.6, 3032.0], [63.7, 3033.0], [63.8, 3033.0], [63.9, 3033.0], [64.0, 3033.0], [64.1, 3034.0], [64.2, 3034.0], [64.3, 3034.0], [64.4, 3035.0], [64.5, 3035.0], [64.6, 3035.0], [64.7, 3036.0], [64.8, 3036.0], [64.9, 3036.0], [65.0, 3036.0], [65.1, 3037.0], [65.2, 3037.0], [65.3, 3037.0], [65.4, 3038.0], [65.5, 3038.0], [65.6, 3038.0], [65.7, 3038.0], [65.8, 3039.0], [65.9, 3039.0], [66.0, 3039.0], [66.1, 3039.0], [66.2, 3040.0], [66.3, 3040.0], [66.4, 3041.0], [66.5, 3041.0], [66.6, 3041.0], [66.7, 3041.0], [66.8, 3042.0], [66.9, 3042.0], [67.0, 3043.0], [67.1, 3043.0], [67.2, 3044.0], [67.3, 3044.0], [67.4, 3045.0], [67.5, 3045.0], [67.6, 3045.0], [67.7, 3045.0], [67.8, 3046.0], [67.9, 3046.0], [68.0, 3046.0], [68.1, 3047.0], [68.2, 3047.0], [68.3, 3047.0], [68.4, 3047.0], [68.5, 3048.0], [68.6, 3048.0], [68.7, 3049.0], [68.8, 3049.0], [68.9, 3049.0], [69.0, 3049.0], [69.1, 3050.0], [69.2, 3050.0], [69.3, 3050.0], [69.4, 3051.0], [69.5, 3051.0], [69.6, 3052.0], [69.7, 3052.0], [69.8, 3052.0], [69.9, 3052.0], [70.0, 3053.0], [70.1, 3053.0], [70.2, 3053.0], [70.3, 3053.0], [70.4, 3054.0], [70.5, 3055.0], [70.6, 3055.0], [70.7, 3055.0], [70.8, 3056.0], [70.9, 3056.0], [71.0, 3056.0], [71.1, 3056.0], [71.2, 3057.0], [71.3, 3057.0], [71.4, 3058.0], [71.5, 3058.0], [71.6, 3059.0], [71.7, 3059.0], [71.8, 3059.0], [71.9, 3059.0], [72.0, 3060.0], [72.1, 3060.0], [72.2, 3060.0], [72.3, 3061.0], [72.4, 3062.0], [72.5, 3062.0], [72.6, 3062.0], [72.7, 3063.0], [72.8, 3063.0], [72.9, 3063.0], [73.0, 3063.0], [73.1, 3064.0], [73.2, 3064.0], [73.3, 3065.0], [73.4, 3065.0], [73.5, 3066.0], [73.6, 3066.0], [73.7, 3066.0], [73.8, 3067.0], [73.9, 3067.0], [74.0, 3067.0], [74.1, 3068.0], [74.2, 3068.0], [74.3, 3068.0], [74.4, 3069.0], [74.5, 3069.0], [74.6, 3069.0], [74.7, 3070.0], [74.8, 3070.0], [74.9, 3071.0], [75.0, 3071.0], [75.1, 3072.0], [75.2, 3073.0], [75.3, 3073.0], [75.4, 3073.0], [75.5, 3074.0], [75.6, 3074.0], [75.7, 3074.0], [75.8, 3075.0], [75.9, 3075.0], [76.0, 3076.0], [76.1, 3076.0], [76.2, 3076.0], [76.3, 3076.0], [76.4, 3077.0], [76.5, 3077.0], [76.6, 3078.0], [76.7, 3078.0], [76.8, 3079.0], [76.9, 3080.0], [77.0, 3080.0], [77.1, 3080.0], [77.2, 3081.0], [77.3, 3081.0], [77.4, 3081.0], [77.5, 3082.0], [77.6, 3082.0], [77.7, 3082.0], [77.8, 3083.0], [77.9, 3083.0], [78.0, 3083.0], [78.1, 3084.0], [78.2, 3084.0], [78.3, 3084.0], [78.4, 3085.0], [78.5, 3085.0], [78.6, 3085.0], [78.7, 3086.0], [78.8, 3086.0], [78.9, 3086.0], [79.0, 3087.0], [79.1, 3087.0], [79.2, 3088.0], [79.3, 3088.0], [79.4, 3088.0], [79.5, 3088.0], [79.6, 3089.0], [79.7, 3089.0], [79.8, 3090.0], [79.9, 3090.0], [80.0, 3091.0], [80.1, 3091.0], [80.2, 3092.0], [80.3, 3093.0], [80.4, 3093.0], [80.5, 3093.0], [80.6, 3093.0], [80.7, 3094.0], [80.8, 3094.0], [80.9, 3095.0], [81.0, 3095.0], [81.1, 3095.0], [81.2, 3096.0], [81.3, 3096.0], [81.4, 3097.0], [81.5, 3098.0], [81.6, 3098.0], [81.7, 3099.0], [81.8, 3099.0], [81.9, 3100.0], [82.0, 3100.0], [82.1, 3100.0], [82.2, 3101.0], [82.3, 3101.0], [82.4, 3102.0], [82.5, 3102.0], [82.6, 3102.0], [82.7, 3103.0], [82.8, 3103.0], [82.9, 3104.0], [83.0, 3104.0], [83.1, 3105.0], [83.2, 3106.0], [83.3, 3106.0], [83.4, 3107.0], [83.5, 3107.0], [83.6, 3108.0], [83.7, 3109.0], [83.8, 3109.0], [83.9, 3110.0], [84.0, 3111.0], [84.1, 3111.0], [84.2, 3111.0], [84.3, 3114.0], [84.4, 3115.0], [84.5, 3116.0], [84.6, 3116.0], [84.7, 3117.0], [84.8, 3118.0], [84.9, 3118.0], [85.0, 3119.0], [85.1, 3120.0], [85.2, 3121.0], [85.3, 3122.0], [85.4, 3123.0], [85.5, 3123.0], [85.6, 3123.0], [85.7, 3124.0], [85.8, 3126.0], [85.9, 3126.0], [86.0, 3126.0], [86.1, 3127.0], [86.2, 3129.0], [86.3, 3130.0], [86.4, 3131.0], [86.5, 3131.0], [86.6, 3132.0], [86.7, 3133.0], [86.8, 3134.0], [86.9, 3135.0], [87.0, 3137.0], [87.1, 3138.0], [87.2, 3139.0], [87.3, 3140.0], [87.4, 3141.0], [87.5, 3142.0], [87.6, 3143.0], [87.7, 3145.0], [87.8, 3146.0], [87.9, 3146.0], [88.0, 3149.0], [88.1, 3150.0], [88.2, 3152.0], [88.3, 3153.0], [88.4, 3155.0], [88.5, 3161.0], [88.6, 3162.0], [88.7, 3162.0], [88.8, 3164.0], [88.9, 3164.0], [89.0, 3165.0], [89.1, 3167.0], [89.2, 3168.0], [89.3, 3170.0], [89.4, 3170.0], [89.5, 3171.0], [89.6, 3172.0], [89.7, 3172.0], [89.8, 3173.0], [89.9, 3174.0], [90.0, 3176.0], [90.1, 3176.0], [90.2, 3177.0], [90.3, 3177.0], [90.4, 3178.0], [90.5, 3179.0], [90.6, 3180.0], [90.7, 3180.0], [90.8, 3181.0], [90.9, 3182.0], [91.0, 3182.0], [91.1, 3183.0], [91.2, 3184.0], [91.3, 3185.0], [91.4, 3185.0], [91.5, 3186.0], [91.6, 3187.0], [91.7, 3188.0], [91.8, 3188.0], [91.9, 3190.0], [92.0, 3191.0], [92.1, 3191.0], [92.2, 3192.0], [92.3, 3192.0], [92.4, 3193.0], [92.5, 3193.0], [92.6, 3194.0], [92.7, 3195.0], [92.8, 3195.0], [92.9, 3196.0], [93.0, 3196.0], [93.1, 3196.0], [93.2, 3197.0], [93.3, 3198.0], [93.4, 3198.0], [93.5, 3199.0], [93.6, 3200.0], [93.7, 3201.0], [93.8, 3202.0], [93.9, 3203.0], [94.0, 3204.0], [94.1, 3204.0], [94.2, 3205.0], [94.3, 3206.0], [94.4, 3207.0], [94.5, 3208.0], [94.6, 3209.0], [94.7, 3210.0], [94.8, 3210.0], [94.9, 3211.0], [95.0, 3212.0], [95.1, 3213.0], [95.2, 3213.0], [95.3, 3213.0], [95.4, 3214.0], [95.5, 3215.0], [95.6, 3216.0], [95.7, 3217.0], [95.8, 3218.0], [95.9, 3218.0], [96.0, 3220.0], [96.1, 3222.0], [96.2, 3223.0], [96.3, 3224.0], [96.4, 3224.0], [96.5, 3226.0], [96.6, 3226.0], [96.7, 3229.0], [96.8, 3229.0], [96.9, 3231.0], [97.0, 3232.0], [97.1, 3233.0], [97.2, 3234.0], [97.3, 3234.0], [97.4, 3235.0], [97.5, 3236.0], [97.6, 3236.0], [97.7, 3239.0], [97.8, 3239.0], [97.9, 3240.0], [98.0, 3243.0], [98.1, 3243.0], [98.2, 3243.0], [98.3, 3245.0], [98.4, 3246.0], [98.5, 3247.0], [98.6, 3248.0], [98.7, 3248.0], [98.8, 3249.0], [98.9, 3250.0], [99.0, 3253.0], [99.1, 3256.0], [99.2, 3256.0], [99.3, 3260.0], [99.4, 3264.0], [99.5, 3266.0], [99.6, 3270.0], [99.7, 3274.0], [99.8, 3279.0], [99.9, 3303.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1061.0, "series": [{"data": [[600.0, 2.0], [700.0, 3.0], [800.0, 2.0], [900.0, 4.0], [1000.0, 3.0], [1100.0, 4.0], [1200.0, 6.0], [1300.0, 3.0], [1400.0, 4.0], [1500.0, 4.0], [100.0, 2.0], [1600.0, 3.0], [1700.0, 5.0], [1800.0, 4.0], [1900.0, 4.0], [2000.0, 5.0], [2100.0, 4.0], [2200.0, 6.0], [2300.0, 5.0], [2400.0, 4.0], [2500.0, 5.0], [2600.0, 7.0], [2700.0, 4.0], [2800.0, 392.0], [2900.0, 1061.0], [3000.0, 805.0], [3100.0, 338.0], [200.0, 1.0], [3200.0, 182.0], [3300.0, 3.0], [300.0, 3.0], [400.0, 3.0], [500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2841.0, "series": [{"data": [[0.0, 9.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 33.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2841.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 95.69652173913046, "minX": 1.69617102E12, "maxY": 99.68147720715523, "series": [{"data": [[1.69617108E12, 95.69652173913046], [1.69617102E12, 99.68147720715523]], "isOverall": false, "label": "search", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69617108E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 312.0, "minX": 1.0, "maxY": 3218.0, "series": [{"data": [[2.0, 2988.0], [3.0, 2987.0], [4.0, 3059.0], [5.0, 3020.0], [6.0, 3025.0], [7.0, 3021.0], [8.0, 3063.0], [9.0, 3059.0], [10.0, 3036.0], [11.0, 3059.0], [12.0, 3045.0], [13.0, 3054.0], [14.0, 3044.0], [15.0, 3046.0], [16.0, 3027.0], [17.0, 3017.0], [18.0, 3070.0], [19.0, 3035.0], [20.0, 3049.0], [21.0, 3039.0], [22.0, 3022.0], [23.0, 3063.0], [24.0, 3033.0], [25.0, 3032.0], [26.0, 3053.0], [27.0, 3218.0], [28.0, 3049.0], [29.0, 3022.0], [30.0, 3038.0], [31.0, 3047.0], [33.0, 3045.0], [32.0, 3056.0], [35.0, 3059.0], [34.0, 3058.0], [37.0, 3035.0], [36.0, 3059.0], [38.0, 1151.6666666666665], [39.0, 1621.5], [41.0, 3038.0], [40.0, 3053.0], [43.0, 3117.0], [42.0, 3018.0], [45.0, 3003.0], [44.0, 3008.0], [47.0, 3028.0], [46.0, 3055.0], [48.0, 1678.5], [49.0, 312.0], [51.0, 3047.0], [50.0, 3018.0], [53.0, 1681.5], [52.0, 3084.0], [55.0, 3038.0], [54.0, 3103.0], [57.0, 3084.0], [56.0, 3065.0], [59.0, 3074.0], [58.0, 3025.0], [61.0, 1743.0], [60.0, 3036.0], [62.0, 1768.5], [63.0, 3044.0], [66.0, 1752.5], [67.0, 3037.0], [65.0, 3069.0], [64.0, 3085.0], [71.0, 3074.0], [70.0, 3067.0], [69.0, 3091.0], [68.0, 3060.0], [74.0, 1780.5], [75.0, 1810.0], [73.0, 3102.0], [72.0, 3083.0], [78.0, 1840.5], [79.0, 3071.0], [77.0, 3085.0], [76.0, 3115.0], [83.0, 3084.0], [82.0, 3088.0], [81.0, 3089.0], [80.0, 3076.0], [87.0, 3060.0], [86.0, 3067.0], [85.0, 3073.0], [84.0, 3089.0], [88.0, 1486.6666666666665], [91.0, 1904.5], [90.0, 3080.0], [89.0, 3076.0], [95.0, 3037.0], [94.0, 3079.0], [93.0, 3060.0], [92.0, 3055.0], [99.0, 3088.0], [98.0, 3079.0], [97.0, 3049.0], [96.0, 3057.0], [100.0, 2972.6280245576], [1.0, 2999.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[98.09191814082537, 2962.333680194244]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4427.5, "minX": 1.69617102E12, "maxY": 318755.06666666665, "series": [{"data": [[1.69617108E12, 211522.51666666666], [1.69617102E12, 318755.06666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.69617108E12, 4427.5], [1.69617102E12, 6672.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69617108E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2915.480092325448, "minX": 1.69617102E12, "maxY": 3032.9400000000037, "series": [{"data": [[1.69617108E12, 3032.9400000000037], [1.69617102E12, 2915.480092325448]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69617108E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2915.3854587420665, "minX": 1.69617102E12, "maxY": 3032.8652173913047, "series": [{"data": [[1.69617108E12, 3032.8652173913047], [1.69617102E12, 2915.3854587420665]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69617108E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.09043478260869581, "minX": 1.69617102E12, "maxY": 0.6739757645701079, "series": [{"data": [[1.69617108E12, 0.09043478260869581], [1.69617102E12, 0.6739757645701079]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69617108E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 196.0, "minX": 1.69617102E12, "maxY": 3333.0, "series": [{"data": [[1.69617108E12, 3306.0], [1.69617102E12, 3333.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.69617108E12, 3182.0], [1.69617102E12, 3165.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.69617108E12, 3257.96], [1.69617102E12, 3249.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.69617108E12, 3213.45], [1.69617102E12, 3209.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.69617108E12, 2859.0], [1.69617102E12, 196.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.69617108E12, 3025.0], [1.69617102E12, 2960.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69617108E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 312.0, "minX": 9.0, "maxY": 3150.0, "series": [{"data": [[32.0, 3072.0], [33.0, 3033.0], [35.0, 2929.0], [34.0, 2953.5], [9.0, 312.0], [36.0, 2959.5], [26.0, 1005.0], [27.0, 3039.0], [29.0, 2955.0], [30.0, 3150.0], [31.0, 3132.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 36.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 312.0, "minX": 9.0, "maxY": 3150.0, "series": [{"data": [[32.0, 3072.0], [33.0, 3033.0], [35.0, 2929.0], [34.0, 2953.5], [9.0, 312.0], [36.0, 2959.5], [26.0, 1004.5], [27.0, 3039.0], [29.0, 2955.0], [30.0, 3150.0], [31.0, 3132.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 36.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 17.5, "minX": 1.69617102E12, "maxY": 30.55, "series": [{"data": [[1.69617108E12, 17.5], [1.69617102E12, 30.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69617108E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 19.166666666666668, "minX": 1.69617102E12, "maxY": 28.883333333333333, "series": [{"data": [[1.69617108E12, 19.166666666666668], [1.69617102E12, 28.883333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.69617108E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 19.166666666666668, "minX": 1.69617102E12, "maxY": 28.883333333333333, "series": [{"data": [[1.69617108E12, 19.166666666666668], [1.69617102E12, 28.883333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69617108E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 19.166666666666668, "minX": 1.69617102E12, "maxY": 28.883333333333333, "series": [{"data": [[1.69617108E12, 19.166666666666668], [1.69617102E12, 28.883333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.69617108E12, "title": "Total Transactions Per Second"}},
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

