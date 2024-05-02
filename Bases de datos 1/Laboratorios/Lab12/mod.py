G = {1,9,16,22,29,53,74,79,81}

for i in G:
    for j in G:
        if (i*j)%91 not in G:
            print(f"{i}*{j} = {(i*j)%91}")
        else:
            print("Ya está")

print(len(G))