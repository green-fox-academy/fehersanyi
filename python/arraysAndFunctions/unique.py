def unique(arr):
     for i in arr[:-2]:
       if arr[i] > arr[i + 1]:
         tmp = arr[i]
         arr[i] = arr[i + 1]
         arr[i + 1] = tmp

     print(arr) 


unique([1, 11, 34, 11, 52, 61, 1, 43])
