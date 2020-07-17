import matplotlib.image as mpimg
import matplotlib.pyplot as plt
import numpy as np

flat_list = np.genfromtxt('C:/Users/Chloé/Documents/Simplon/Veille/TrasnformeeFourier/pandaFourier200.csv', delimiter='\n')
#print(flat_list)
flat_list = flat_list[::-1]

list_img = []
for i in range(30):
    row = []
    #row = list(flat_list[30*i:30*i+30])
    for j in range(30):
        pixel = flat_list[j+30*i]/255
        row.append([pixel, pixel, pixel])
    list_img.append(row)
#print(list_img)

lum_img = np.array(list_img)
#print(lum_img)

img = plt.imshow(lum_img)
plt.show()
