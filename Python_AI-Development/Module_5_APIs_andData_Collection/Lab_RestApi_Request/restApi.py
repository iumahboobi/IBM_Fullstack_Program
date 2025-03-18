import requests
import os 
from PIL import Image


url='https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-PY0101EN-SkillsNetwork/IDSNlogo.png'
r=requests.get(url)
print(r.status_code)
print("request body:", r.request.body)
header=r.headers
print(header['Content-Type'])


path=os.path.join(os.getcwd(),'image.png')
print(f"Path s:",path)
with open(path,'wb') as f:# Use 'wb' for writing binary data
    f.write(r.content)
Image.open(path)

print(f"-----------Quiz----------")
# Question Download a file
#URL = <https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-PY0101EN-SkillsNetwork/labs/Module%205/data/Example1.txt
URL = 'https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-PY0101EN-SkillsNetwork/labs/Module%205/data/Example1.txt'
path= os.path.join(os.getcwd(),'Example1.txt')

s=requests.get(URL)
with open(path,'wb')as f:
    f.write(s.content)
