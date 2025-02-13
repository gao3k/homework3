#6kyu
def unique_in_order(sequence):
    if not sequence:
        return []

    result = [sequence[0]]
    
    for element in sequence[1:]:
     
        if element != result[-1]:
            result.append(element)
    
    return result


def sort_string_by_number(s):
    if not s:
        return ""

    # dayops input strings saxelebad
    words = s.split()

    #dayobs sityvebs napovni nomrebi titouel sityvashi 
    sorted_words = sorted(words, key=lambda word: int(next(char for char in word if char.isdigit())))

    # dayofil stringebs sheaertebs
    return " ".join(sorted_words)

#7kyu
def max_multiple(divisor, bound):
    return (bound // divisor) * divisor


def get_issuer(card_number):
    #  barati stringad iqceva
    card_number = str(card_number)
    
    # avigot barati sigrdze
    length = len(card_number)
    
    #(prefixes, valid_lengths, issuer_name)
    issuers = [
        (('34', '37'), {15}, 'AMEX'),
        (('6011',), {16}, 'Discover'),
        (('51', '52', '53', '54', '55'), {16}, 'Mastercard'),
        (('4',), {13, 16}, 'VISA')
    ]
    
    
    for prefixes, valid_lengths, issuer in issuers:
        #shevamowot baratis sigrdze swor sigrdzeze Check if the card number's length is in the valid lengths
        if length in valid_lengths:
          
            if any(card_number.startswith(prefix) for prefix in prefixes):
                return issuer
    
    # tu is arcerts ar utoldeba, return "Unknown"
    return "Unknown"


def switch_a_b(s):

    translation_table = str.maketrans('ab', 'ba')

    return s.translate(translation_table)

def count_people_on_bus(stops):
   
    people_on_bus = 0
    
  
    for on, off in stops:
       
        people_on_bus += on
        people_on_bus -= off
    
    return people_on_bus

