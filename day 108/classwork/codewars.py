#8 kyu
def get_size(length, width, height):
    area = 2 * (length * width + width * height + length * height)
    volume = length * width * height
    return [area, volume]
