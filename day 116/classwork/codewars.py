def comfortable_word(word):
    left_hand = set('qwertasdfgzxcvb')
    right_hand = set('yuiophjklnm')


    word = word.lower()


    if word[0] in left_hand:
        prev_hand = 'left'
    elif word[0] in right_hand:
        prev_hand = 'right'
    else:
        return False


    for char in word[1:]:
        if char in left_hand:
            current_hand = 'left'
        elif char in right_hand:
            current_hand = 'right'
        else:
            return False

        if current_hand == prev_hand:
            return False
        prev_hand = current_hand

    return True