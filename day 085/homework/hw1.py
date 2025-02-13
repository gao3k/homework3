
1.# **A && !B**: 
  # - A = 1
   #- !B = 1 (რადგან B = 0, !B = 1)
   #- 1 && 1 = 1

#2. **B && !A**: 
 #  - B = 0
  # - !A = 0 (რადგან A = 1, !A = 0)
   #- 0 && 0 = 0

### ბ) (B && C) && (A || B)
#1. **B && C**: 
  # - B = 0
 #  - C = 0
  # - 0 && 0 = 0

#2. **A || B**: 
   #- A = 1
   #- B = 0
   #- 1 || 0 = 1

#3. **(B && C) && (A || B)**: 
   #- 0 && 1 = 0

### გ) (A && !C) || (B && !A) || (B && !C)
#1. **A && !C**: 
  # - A = 1
 #  - !C = 1 (რადგან C = 0, !C = 1)
  # - 1 && 1 = 1

#2. **B && !A**: 
#   - B = 0
  # - !A = 0 (რადგან A = 1, !A = 0)
 #  - 0 && 0 = 0

#3. **B && !C**: 
#   - B = 0
 #  - !C = 1 (რადგან C = 0, !C = 1)
 #  - 0 && 1 = 0

#4. **(A && !C) || (B && !A) || (B && !C)**: 
  # - 1 || 0 || 0 = 1

#პასიხები:
#1. **ა)** A && !B = 1 და B && !A = 0
#2. **ბ)** (B && C) && (A || B) = 0
#3. **გ)** (A && !C) || (B && !A) || (B && !C) = 1

