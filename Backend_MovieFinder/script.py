import json

from datetime import datetime
import requests
from time import sleep


data = []
ides = []

with open('movies.json', 'w') as jsonFile:
	# for num in range(10):
	# 	request = requests.get('http://www.omdbapi.com/?s=avengers&page={num}&apikey=fc34f22f')
	# 	sleep(0.2)
	# 	data += request.json()['Search']
	for num in range(1,300):
		url = f'http://www.omdbapi.com/?s=star&page={num}&apikey=fc34f22f'
		if num == 1:
			url = 'http://www.omdbapi.com/?s=star&apikey=fc34f22f'
		request = requests.get(url)
		sleep(0.1)
		print(request.json())
		data += request.json()['Search']
	# for num in range(400):
	# 	request = requests.get('http://www.omdbapi.com/?s=dead&page={num}&apikey=fc34f22f')
	# # data.append(request.json())
	# 	sleep(0.2)
	# 	data += request.json()['Search']
	json.dump(data,jsonFile)



with open('movies.json', 'r') as file:
	data = json.load(file)


newdata = []
for movie in data:
	id_ = movie['imdbID']
	request = requests.get(f'http://www.omdbapi.com/?i={id_}&apikey=fc34f22f')
	newdata.append(request.json())

# for id_ in ides:
# 	print(id_)
	# request = requests.get('http://www.omdbapi.com/?i={id_}&apikey=fc34f22f')
	# data.append(request.json())
	# sleep(0.2)

with open('movies.json', 'w') as file:
	json.dump(newdata, file)


# movie = Movie(name=movie['Title'], type=movie['Type'], imdb_id= movie['imdbID'], image=movie['Poster'],)


from api.models import Movie
from datetime import datetime
import json

data = []

with open('movies.json', 'r') as file:
	data = json.load(file)

for movie in data:
	finded = Movie.objects.filter(imdb_id=movie['imdbID'])
	if len(finded) == 0:
		print(movie['imdbID'])
		try: 
			realeased_date = datetime.strptime(movie['Released'], "%d %b %Y") 
		except ValueError:
			realeased_date = None
		try:
			runTime = int(movie['Runtime'].split(' ')[0])	
		except ValueError:
			runTime = None
		if movie['Type'] == 'movie':
			endYear =datetime.strptime(movie['Year'], "%Y")  
			totalSeason = 1
		else:
			try:
				print( type(movie['Year'].split('–')[1]))
				endYear = datetime.strptime(movie['Year'].split('–')[1], "%Y")  
			except Exception:
				endYear = datetime.strptime(movie['Year'].split('–')[0], "%Y")  
			try:
				totalSeason = movie['totalSeasons']
				if movie['totalSeasons'] == 'N/A' :
					totalSeason = None
			except KeyError:
				totalSeason = None
		if movie['Poster'] == 'N/A':
			m = Movie(name=movie['Title'], type=movie['Type'], imdb_id= movie['imdbID'],  genre=movie['Genre'], imdb_rating=movie['imdbRating'],released_date=realeased_date,
			endYear=endYear,language=movie['Language'], summary=movie['Plot'],actors=movie['Actors'],run_time=runTime,totalSeason=totalSeason)
		else:
			m = Movie(name=movie['Title'], type=movie['Type'], imdb_id= movie['imdbID'], image_url=movie['Poster'], genre=movie['Genre'], imdb_rating=movie['imdbRating'],released_date=realeased_date,
			endYear=endYear,language=movie['Language'], summary=movie['Plot'],actors=movie['Actors'],run_time=runTime,totalSeason=totalSeason)
		m.save()

# from api.models import Movie
# from datetime import datetime
# import json
# data = []
# with open('movies.json','r') as file:
# 	data = json.load(file)
