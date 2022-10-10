words = ['one', 'two', 'three']
nums = [1, 2, 3]

nice=[]
for i in range(len(words)):
    for j in range(len(nums)):
        if i == j:
            #print(str(words[i]) + ":" + str(nums[j]))
            nice.append(str(words[i]) + ":" + str(nums[j]))
            
name= ('\n aa '.join(map(str, nice)))

print(name)