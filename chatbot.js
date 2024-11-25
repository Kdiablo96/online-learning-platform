document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('user-input');
    const messageText = input.value.trim();
    if (messageText === '') return;

    // Display user message
    displayMessage(messageText, 'user-message');
    input.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(messageText);
        displayMessage(botResponse, 'bot-message');
    }, 1000);
}

function displayMessage(text, className) {
    const messagesContainer = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
}

function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    // Emotional support responses
    if (lowerCaseMessage.includes("i am feeling anxious") || lowerCaseMessage.includes("i feel anxious")) {
        return "I'm here for you. Take a few deep breaths with me. Inhale... and exhale... It's okay to feel anxious sometimes.";
    } else if (lowerCaseMessage.includes("stress")) {
        return "Stress can really weigh you down. Have you tried mindfulness techniques or going for a walk? It helps to clear the mind!";
    } else if (lowerCaseMessage.includes("sad") || lowerCaseMessage.includes("feeling down")) {
        return "It’s completely normal to feel sad sometimes. Want to talk about what's on your mind? I'm here to listen!";
    } else if (lowerCaseMessage.includes("better sleep") || lowerCaseMessage.includes("sleep issues")) {
        return "For better sleep, try creating a calming bedtime routine. Reading a book or listening to soft music can work wonders!";
    } else if (lowerCaseMessage.includes("overwhelmed")) {
        return "Feeling overwhelmed is tough! Remember, it's okay to take a break and tackle things one step at a time.";
    } else if (lowerCaseMessage.includes("worried")) {
        return "Worrying can be exhausting. Try to focus on what you can control and let go of what you can't. I'm here if you need to talk.";
    } else if (lowerCaseMessage.includes("how do i cope with anxiety")) {
        return "Coping with anxiety can involve deep breathing, exercise, or reaching out to someone you trust. Want some tips on specific techniques?";
    } else if (lowerCaseMessage.includes("can't sleep") || lowerCaseMessage.includes("trouble sleeping")) {
        return "If you're having trouble sleeping, consider avoiding screens before bed and creating a relaxing environment. A warm drink can help too!";
    } else if (lowerCaseMessage.includes("i feel lonely")) {
        return "I'm here for you! Loneliness can be tough, but talking about it can help. What’s been on your mind?";
    } else if (lowerCaseMessage.includes("how do i feel better")) {
        return "Feeling better can take time. It helps to talk to someone, do something you enjoy, or practice self-care. What do you like to do?";
    } else if (lowerCaseMessage.includes("i am stressed out")) {
        return "I'm sorry to hear that! Try taking a few minutes for yourself, maybe some stretches or a quick walk? You deserve a break!";
    } else if (lowerCaseMessage.includes("motivated")) {
        return "Staying motivated can be challenging. Setting small goals can help! What’s something you want to achieve today?";
    } else if (lowerCaseMessage.includes("i feel guilty")) {
        return "It's normal to feel guilty sometimes. Talking it out can help you understand those feelings better. Want to share more?";
    } else if (lowerCaseMessage.includes("depressed")) {
        return "I'm really sorry to hear that. It’s important to talk to someone who can help. Would you like resources or someone to connect with?";
    } else if (lowerCaseMessage.includes("happy") || lowerCaseMessage.includes("feeling good")) {
        return "That's great to hear! What’s bringing you joy today? I’d love to celebrate with you!";
    } else if (lowerCaseMessage.includes("exercise")) {
        return "Exercise is a fantastic way to boost your mood! Even a short walk can make a big difference. Do you have a favorite activity?";
    } else if (lowerCaseMessage.includes("self-care")) {
        return "Self-care is so important! Whether it's a warm bath, reading a book, or just taking a moment to breathe, what do you like to do?";
    } else if (lowerCaseMessage.includes("i need support")) {
        return "I'm here for you! It’s okay to ask for help. What kind of support are you looking for?";
    } else if (lowerCaseMessage.includes("coping strategies")) {
        return "Coping strategies can include mindfulness, journaling, or talking to friends. Would you like to explore any of these?";
    } else if (lowerCaseMessage.includes("panic attack")) {
        return "Panic attacks can be really scary. Have you tried grounding techniques? Focusing on your breath can help. I’m here with you!";
    } else if (lowerCaseMessage.includes("therapy")) {
        return "Therapy can be a great way to work through feelings. Have you considered talking to a therapist? I can help find resources!";
    } else if (lowerCaseMessage.includes("how can i be happier")) {
        return "Finding happiness is a personal journey. Sometimes, gratitude and connecting with others can help. What brings you joy?";
    } else if (lowerCaseMessage.includes("stress relief")) {
        return "For stress relief, try deep breathing exercises or a short walk. Even a few minutes can make a big difference!";
    } else if (lowerCaseMessage.includes("i feel overwhelmed")) {
        return "It's okay to feel overwhelmed. Remember to take things one step at a time, and don’t hesitate to reach out for help!";
    } else if (lowerCaseMessage.includes("positive thoughts")) {
        return "Focusing on positive thoughts can help! Try to think of three things you’re grateful for. What comes to mind?";
    } else if (lowerCaseMessage.includes("mood swings")) {
        return "Mood swings can be tough. It's important to talk about your feelings. Want to share what's been on your mind?";
    } else if (lowerCaseMessage.includes("feel trapped")) {
        return "Feeling trapped can be overwhelming. It might help to talk about what's making you feel this way. I’m here to listen.";
    } else if (lowerCaseMessage.includes("communication")) {
        return "Good communication can really help with feelings. Sometimes just expressing how you feel can lighten the load. How can I assist you?";
    } else if (lowerCaseMessage.includes("emotional support")) {
        return "You’re not alone! Emotional support can come from talking, self-care, or even journaling. What do you think would help you most?";
    } else if (lowerCaseMessage.includes("how to manage emotions")) {
        return "Managing emotions can be challenging. Mindfulness and talking to someone can be really beneficial. Want some specific techniques?";
    } else if (lowerCaseMessage.includes("how to stay positive")) {
        return "Staying positive can be tough, but surrounding yourself with good vibes and supportive people helps! What makes you smile?";
    } else if (lowerCaseMessage.includes("let go of anger")) {
        return "Letting go of anger can be hard. Sometimes, writing down your feelings can help. Have you tried that?";
    } else if (lowerCaseMessage.includes("feeling hopeless")) {
        return "I'm really sorry to hear that. It’s important to talk to someone who can help. Would you like resources or someone to connect with?";
    }else if (lowerCaseMessage.includes("how to feel confident") || lowerCaseMessage.includes("confidence")) {
        return "Building confidence takes time, but celebrating small wins can help! What’s something you’re proud of? Remember, it’s important to focus on your strengths and set achievable goals. Surrounding yourself with supportive people can also make a big difference. Have you tried stepping out of your comfort zone in small ways? It can really boost your self-esteem!";
    }else if (lowerCaseMessage.includes("grief")) {
        return "Grief is a tough journey, and it’s completely normal to feel a wide range of emotions. It's important to express how you feel, whether that's through talking, writing, or even creating art. Have you considered joining a support group or speaking with a counselor? Connecting with others who understand can be incredibly helpful. Remember, it's okay to take your time as you navigate this process. Would you like to talk about it or need some resources?";
    }
     else if (lowerCaseMessage.includes("need a friend")) {
        return "I'm here for you! It's okay to seek connection. What’s on your mind? Let’s chat!";
    } else if (lowerCaseMessage.includes("what makes me happy")) {
        return "Finding joy in little things can make a difference! What are some activities or people that bring you happiness?";
    } else if (lowerCaseMessage.includes("how to relax")) {
        return "Relaxation techniques like deep breathing or listening to music can help! What do you enjoy doing to unwind?";
    } else if (lowerCaseMessage.includes("feeling insecure")) {
        return "Feeling insecure can be tough. Remember, everyone has their unique qualities. What makes you special?";
    } else if (lowerCaseMessage.includes("how to manage my anger")) {
        return "Managing anger effectively involves several strategies tailored to your needs. Deep breathing and counting to ten can help calm immediate feelings. Additionally, regular physical activity, such as walking, running, or yoga, can be great for releasing built-up tension. Journaling about your feelings can provide insights into what triggers your anger, and discussing your emotions with someone you trust can offer valuable support. Practicing mindfulness or meditation can also help you develop a better awareness of your emotions. Would you like to explore any specific techniques or resources to help with anger management?";
    }
     else if (lowerCaseMessage.includes("work-life balance")) {
        return "Maintaining a work-life balance is essential! Setting boundaries and making time for yourself can help. How do you manage your time?";
    }

    // Mathematical responses
    if (lowerCaseMessage.includes("quadratic formula")) {
        return `
            The quadratic formula is:
    
            x = (-b ± √(b² - 4ac)) / (2a)
    
            This formula is used to find the solutions of quadratic equations, which are in the form of:
    
            ax² + bx + c = 0.
    
            The formula helps you find the values of x (the roots) where the parabola intersects the x-axis.
    
            If you'd like, I can walk you through an example problem step-by-step or explain any part of it in more detail. 
    
            What would you like to know more about?
        `;
    }
    
    else if (lowerCaseMessage.includes("more on the quadratic formula")) {
        return `
            The quadratic formula is:
    
            x = (-b ± √(b² - 4ac)) / (2a)
    
            It is used to find the solutions of quadratic equations, which are in the form of:
    
            ax² + bx + c = 0.
    
            This formula helps you find the values of x (the roots) where the parabola intersects the x-axis.
    
            Here are a few examples:
    
            1. **Example 1:** For the equation 2x² + 3x - 2 = 0, where a = 2, b = 3, and c = -2:
               - Discriminant: 3² - 4(2)(-2) = 9 + 16 = 25
               - Roots: x = (-3 ± √25) / (4) → x = 0.5 and x = -2
    
            2. **Example 2:** For the equation x² - 4x + 4 = 0, where a = 1, b = -4, and c = 4:
               - Discriminant: (-4)² - 4(1)(4) = 16 - 16 = 0
               - Root: x = (4 ± 0) / (2) → x = 2 (double root)
    
            3. **Example 3:** For the equation 3x² + 5x + 2 = 0, where a = 3, b = 5, and c = 2:
               - Discriminant: 5² - 4(3)(2) = 25 - 24 = 1
               - Roots: x = (-5 ± 1) / (6) → x = -2/3 and x = -1
    
            If you want to solve any of these equations step-by-step or have other specific questions, feel free to ask!
        `;
    }
       
    else if (lowerCaseMessage.includes("solve for x")) {
        return `
            To solve for x in an equation, we want to isolate x on one side of the equation. 
            This process often involves using algebraic operations such as addition, subtraction, 
            multiplication, or division. Here's a breakdown with some examples:
    
            1. **Example 1:** Solve for x: 2x + 3 = 11
               - Subtract 3 from both sides: 2x = 8
               - Divide by 2: x = 4
    
            2. **Example 2:** Solve for x: 5x - 7 = 18
               - Add 7 to both sides: 5x = 25
               - Divide by 5: x = 5
    
            3. **Example 3:** Solve for x: x/4 + 2 = 6
               - Subtract 2 from both sides: x/4 = 4
               - Multiply by 4: x = 16
    
            4. **Example 4:** Solve for x: 3(x - 1) = 9
               - Distribute 3: 3x - 3 = 9
               - Add 3 to both sides: 3x = 12
               - Divide by 3: x = 4
    
            5. **Example 5:** Solve for x: x² - 4 = 0
               - Add 4 to both sides: x² = 4
               - Take the square root: x = ±2
    
            If you have a specific equation in mind that you'd like me to solve step-by-step, 
            please share it, and I’ll be happy to help!
        `;
    }
    
    else if (lowerCaseMessage.includes("more examples on solving for 'x'")) {
        return `
            To solve for x in an equation, our goal is to isolate x on one side of the equation. 
            This involves using various algebraic operations, such as addition, subtraction, 
            multiplication, or division, to manipulate the equation. Below, I've outlined several 
            examples to illustrate the process:
    
            1. **Example 1:** Solve for x: **2x + 3 = 11**
               - **Step 1:** Subtract 3 from both sides: **2x = 11 - 3**
               - **Step 2:** Simplifying gives **2x = 8**
               - **Step 3:** Divide by 2: **x = 8 / 2**
               - **Solution:** Therefore, **x = 4**
    
            2. **Example 2:** Solve for x: **5x - 7 = 18**
               - **Step 1:** Add 7 to both sides: **5x = 18 + 7**
               - **Step 2:** Simplifying gives **5x = 25**
               - **Step 3:** Divide by 5: **x = 25 / 5**
               - **Solution:** Therefore, **x = 5**
    
            3. **Example 3:** Solve for x: **x/4 + 2 = 6**
               - **Step 1:** Subtract 2 from both sides: **x/4 = 6 - 2**
               - **Step 2:** Simplifying gives **x/4 = 4**
               - **Step 3:** Multiply both sides by 4: **x = 4 * 4**
               - **Solution:** Therefore, **x = 16**
    
            4. **Example 4:** Solve for x: **3(x - 1) = 9**
               - **Step 1:** Distribute 3: **3x - 3 = 9**
               - **Step 2:** Add 3 to both sides: **3x = 9 + 3**
               - **Step 3:** Simplifying gives **3x = 12**
               - **Step 4:** Divide by 3: **x = 12 / 3**
               - **Solution:** Therefore, **x = 4**
    
            5. **Example 5:** Solve for x: **x² - 4 = 0**
               - **Step 1:** Add 4 to both sides: **x² = 4**
               - **Step 2:** Take the square root of both sides: **x = ±√4**
               - **Solution:** Therefore, **x = ±2**
    
            ### Additional Tips:
            - Always perform the same operation on both sides of the equation to maintain balance.
            - Check your solution by substituting x back into the original equation to ensure both sides are equal.
            - If you encounter more complex equations, consider rearranging terms or factoring.
    
            If you have a specific equation in mind that you'd like me to solve step-by-step, 
            please share it, and I’ll be happy to help!
        `;
    }
    
    else if (lowerCaseMessage.includes("info on trigonometry")) {
        return `
            Trigonometry is a branch of mathematics that studies the relationships between 
            the angles and sides of triangles, particularly right triangles. It has various 
            applications in fields such as physics, engineering, and astronomy. Here are 
            some key concepts and functions:
    
            ### Key Functions:
            1. **Sine (sin):** In a right triangle, the sine of an angle is the ratio of the 
               length of the opposite side to the length of the hypotenuse.
               - **Formula:** sin(θ) = opposite / hypotenuse
    
            2. **Cosine (cos):** The cosine of an angle is the ratio of the length of the 
               adjacent side to the length of the hypotenuse.
               - **Formula:** cos(θ) = adjacent / hypotenuse
    
            3. **Tangent (tan):** The tangent of an angle is the ratio of the length of 
               the opposite side to the length of the adjacent side.
               - **Formula:** tan(θ) = opposite / adjacent
    
            ### Trigonometric Identities:
            Trigonometric identities are equations involving trigonometric functions that 
            are true for all values of the variables involved. Some important ones include:
            - **Pythagorean Identity:** sin²(θ) + cos²(θ) = 1
            - **Angle Sum Identity:**
              - sin(a + b) = sin(a)cos(b) + cos(a)sin(b)
              - cos(a + b) = cos(a)cos(b) - sin(a)sin(b)
    
            ### Applications of Trigonometry:
            - **Solving Triangles:** Using known side lengths or angles to find unknown values.
            - **Modeling Periodic Phenomena:** Such as sound waves, light waves, and alternating currents.
            - **Navigation:** Trigonometry is used in calculating distances and angles when plotting courses.
    
            ### Example Problem:
            Let's say we want to find the height of a tree using trigonometry. If you stand 
            30 meters away from the tree and measure the angle of elevation to the top of 
            the tree as 45 degrees, you can use the tangent function:
            - **tan(θ) = opposite / adjacent**
            - Here, opposite is the height of the tree (h), and adjacent is the distance 
              from the tree (30m):
            - tan(45°) = h / 30
            - Since tan(45°) = 1, we have:
            - 1 = h / 30, thus h = 30 meters.
    
            If you have specific questions about trigonometry or need help with a particular 
            problem, feel free to ask!
        `;
    }
    
    else if (lowerCaseMessage.includes("calculus") || lowerCaseMessage.includes("statistics") || lowerCaseMessage.includes("word problems")) {
        let response = "";
    
        // Calculus
        if (lowerCaseMessage.includes("derivative of x²") || lowerCaseMessage.includes("integral of 3x²") || lowerCaseMessage.includes("limit")) {
            response += "### Calculus\n\n";
            
            // Derivative of x²
            response += "**Finding the derivative of x²:**\n";
            response += "To find the derivative, we use the power rule, which states that the derivative of x^n is n*x^(n-1).\n";
            response += "For x²:\n";
            response += "- The derivative is: d/dx (x²) = 2x.\n\n";
    
            // Integral of 3x²
            response += "**Finding the integral of 3x²:**\n";
            response += "To find the integral, we use the power rule for integration, which states that the integral of x^n is (1/(n+1))*x^(n+1) + C.\n";
            response += "For 3x²:\n";
            response += "- The integral is: ∫ 3x² dx = 3 * (1/(2+1)) * x^(2+1) + C = x³ + C.\n\n";
    
            // Explanation of a limit
            response += "**What is a limit?**\n";
            response += "A limit is a fundamental concept in calculus that describes the behavior of a function as its input approaches a certain value. For example:\n";
            response += "- The limit of f(x) as x approaches 2 for f(x) = x² is 4, because as x gets closer to 2, f(x) approaches 4.\n\n";
        }
    
        // Statistics
        if (lowerCaseMessage.includes("mean") || lowerCaseMessage.includes("median") || lowerCaseMessage.includes("standard deviation")) {
            response += "### Statistics\n\n";
            
            // Calculating the mean
            response += "**Calculating the mean of the numbers: 4, 8, 15, 16, 23, 42:**\n";
            response += "The mean is calculated by adding all the numbers and dividing by the count:\n";
            response += "- Mean = (4 + 8 + 15 + 16 + 23 + 42) / 6 = 108 / 6 = 18.\n\n";
    
            // Difference between mean and median
            response += "**Difference between mean and median:**\n";
            response += "The mean is the average of a set of numbers, while the median is the middle value when the numbers are sorted.\n";
            response += "For the dataset (4, 8, 15, 16, 23, 42):\n";
            response += "- Median = (15 + 16) / 2 = 15.5.\n";
            response += "- Mean = 18 (calculated previously).\n\n";
    
            // Finding standard deviation
            response += "**Finding the standard deviation of a data set (4, 8, 15, 16, 23, 42):**\n";
            response += "1. Find the mean (18).\n";
            response += "2. Calculate the squared differences from the mean:\n";
            response += "   - (4 - 18)² = 196,\n";
            response += "   - (8 - 18)² = 100,\n";
            response += "   - (15 - 18)² = 9,\n";
            response += "   - (16 - 18)² = 4,\n";
            response += "   - (23 - 18)² = 25,\n";
            response += "   - (42 - 18)² = 576.\n";
            response += "3. Find the variance (average of squared differences):\n";
            response += "- Variance = (196 + 100 + 9 + 4 + 25 + 576) / 6 = 151.\n";
            response += "4. Standard deviation = √Variance = √151 ≈ 12.25.\n\n";
        }
    
        // Word Problems
        if (lowerCaseMessage.includes("word problems")) {
            response += "### Word Problems\n\n";
            
            // Car travel problem
            response += "**If a car travels 60 miles in 1 hour, how far will it travel in 3 hours?**\n";
            response += "- Distance = Speed × Time = 60 miles/hour × 3 hours = 180 miles.\n\n";
    
            // Area of a rectangle
            response += "**A rectangle has a length of 10 and a width of 5. What is its area?**\n";
            response += "- Area = Length × Width = 10 × 5 = 50 square units.\n\n";
    
            // Cost of apples
            response += "**If I buy 3 apples for $2 each, how much do I spend?**\n";
            response += "- Total Cost = Number of Apples × Price per Apple = 3 × $2 = $6.\n";
        }
    
        return response;
    }
    
    else if (lowerCaseMessage.includes(" info on geometry")) {
        return "Geometry is a branch of mathematics that deals with the properties and relationships of points, lines, angles, surfaces, and solids. It plays a crucial role in various fields such as architecture, engineering, art, and physics. Here are some fundamental concepts and key topics in geometry:\n\n" +
    
        "### Basic Concepts:\n" +
        "1. **Point**: A location in space with no size or dimension.\n" +
        "2. **Line**: A straight path that extends infinitely in both directions, defined by two points.\n" +
        "3. **Angle**: Formed by two rays (sides of the angle) that share a common endpoint (the vertex).\n\n" +
    
        "### Types of Angles:\n" +
        "- **Acute Angle**: Less than 90 degrees.\n" +
        "- **Right Angle**: Exactly 90 degrees.\n" +
        "- **Obtuse Angle**: Greater than 90 degrees but less than 180 degrees.\n\n" +
    
        "### Polygons:\n" +
        "Polygons are flat shapes with straight sides. They can be classified by the number of sides:\n" +
        "- **Triangle** (3 sides)\n" +
        "- **Quadrilateral** (4 sides)\n" +
        "- **Pentagon** (5 sides)\n" +
        "- **Hexagon** (6 sides)\n" +
        "- **Heptagon** (7 sides)\n" +
        "- **Octagon** (8 sides)\n\n" +
    
        "### Important Formulas:\n" +
        "1. **Area of a Triangle**: A = 1/2 × base × height\n" +
        "2. **Area of a Rectangle**: A = length × width\n" +
        "3. **Area of a Circle**: A = πr², where r is the radius\n" +
        "4. **Circumference of a Circle**: C = 2πr\n" +
        "5. **Volume of a Cylinder**: V = πr²h, where h is the height\n\n" +
    
        "### Theorems:\n" +
        "1. **Pythagorean Theorem**: In a right triangle, a² + b² = c², where c is the hypotenuse.\n" +
        "2. **Angle Sum Property of a Triangle**: The sum of the interior angles of a triangle is always 180 degrees.\n\n" +
    
        "### Example Problem:\n" +
        "Let's say you want to find the area of a triangle with a base of 10 units and a height of 5 units. Using the area formula:\n" +
        "- A = 1/2 × base × height = 1/2 × 10 × 5 = 25 square units.\n\n" +
    
        "If you have specific geometry questions or problems you'd like help with, feel free to ask!";
    }
    else if (lowerCaseMessage.includes("how to find the mean in a frequency distribution") || lowerCaseMessage.includes("median") || lowerCaseMessage.includes("mode")) {
        return `
            To find the mean in a frequency distribution, you'll want to use the following steps:
    
            1. **Identify the values and their frequencies:** Create a table listing each unique value and how many times it occurs (the frequency).
    
            2. **Calculate the total frequency:** Sum all the frequencies to get the total number of data points.
    
            3. **Multiply each value by its frequency:** This gives you the total contribution of each value to the dataset.
    
            4. **Sum these products:** Add all the results from the previous step together.
    
            5. **Divide by the total frequency:** This will give you the mean (average).
    
            ### Example:
    
            | Value (x) | Frequency (f) | f * x |
            |-----------|---------------|-------|
            |     1     |       2       |   2   |
            |     2     |       3       |   6   |
            |     3     |       5       |  15   |
            |     4     |       4       |  16   |
            |     5     |       1       |   5   |
    
            1. **Identify values and frequencies:** 1 occurs 2 times, 2 occurs 3 times, etc.
            2. **Total frequency (N):** 2 + 3 + 5 + 4 + 1 = 15.
            3. **Multiply each value by its frequency:** (1*2) + (2*3) + (3*5) + (4*4) + (5*1) = 2 + 6 + 15 + 16 + 5 = 44.
            4. **Mean (μ):** Divide the sum by total frequency: Mean = Total (f * x) / Total frequency = 44 / 15 ≈ 2.93.
    
            ### Median and Mode:
            - **Median:** The median is the middle value when data is ordered. For an even number of observations, it’s the average of the two middle values.
            - **Mode:** The mode is the value that appears most frequently in the dataset. In this example, the mode is 3, as it has the highest frequency (5).
    
            Would you like more examples or clarification on a specific part of this process?
        `;
    }
    
    else if (lowerCaseMessage.includes("how to find the mean using the general formula") || lowerCaseMessage.includes("general formula") || lowerCaseMessage.includes("specific formula")) {
        return `
            To find the mean, you can use two approaches: the general formula and the specific formula.
    
            ### General Formula:
            The mean (average) of a dataset is calculated using the general formula:
    
            **Mean (μ) = (Σx) / N**
    
            Where:
            - Σx = sum of all data points
            - N = number of data points
    
            ### Example 1:
            Consider the dataset: 5, 10, 15, 20.
            1. **Sum the values:** 5 + 10 + 15 + 20 = 50.
            2. **Count the values (N):** There are 4 data points.
            3. **Calculate the mean:** Mean = 50 / 4 = 12.5.
    
            ### Example 2:
            For the dataset: 2, 4, 6, 8, 10.
            1. **Sum the values:** 2 + 4 + 6 + 8 + 10 = 30.
            2. **Count the values (N):** There are 5 data points.
            3. **Calculate the mean:** Mean = 30 / 5 = 6.
    
            ### Specific Formula:
            When dealing with grouped data (like frequency distributions), you can use the specific formula:
    
            **Mean (μ) = (Σ(f * x)) / N**
    
            Where:
            - f = frequency of each value
            - x = midpoint of each class (for grouped data)
            - N = total frequency
    
            ### Example 1 (Grouped Data):
            Consider the following frequency distribution:
    
            | Class Interval | Frequency (f) |
            |----------------|---------------|
            |      1-3      |       2       |
            |      4-6      |       3       |
            |      7-9      |       5       |
            |     10-12     |       4       |
    
            1. **Find midpoints (x):** 2, 5, 8, 11.
            2. **Calculate (f * x):** (2*2) + (3*5) + (5*8) + (4*11) = 4 + 15 + 40 + 44 = 103.
            3. **Total frequency (N):** 2 + 3 + 5 + 4 = 14.
            4. **Calculate the mean:** Mean = 103 / 14 ≈ 7.36.
    
            ### Example 2 (Grouped Data):
            Consider the frequency distribution:
    
            | Class Interval | Frequency (f) |
            |----------------|---------------|
            |      5-7      |       3       |
            |      8-10     |       2       |
            |     11-13     |       4       |
            |     14-16     |       1       |
    
            1. **Find midpoints (x):** 6, 9, 12, 15.
            2. **Calculate (f * x):** (3*6) + (2*9) + (4*12) + (1*15) = 18 + 18 + 48 + 15 = 99.
            3. **Total frequency (N):** 3 + 2 + 4 + 1 = 10.
            4. **Calculate the mean:** Mean = 99 / 10 = 9.9.
    
            Would you like to go over any part of this or try solving a problem together?
        `;
    }else if (lowerCaseMessage.includes("how to solve equations") ||lowerCaseMessage.includes("system of equations")) {
        return `
            To solve a system of equations, you can use several methods. Here are two common approaches:
    
            ### Method 1: Substitution
            1. **Solve one equation for one variable:** Choose one equation and solve for one variable in terms of the other.
            2. **Substitute:** Substitute this expression into the other equation.
            3. **Solve:** Solve for the remaining variable.
            4. **Back-substitute:** Substitute this value back into the first equation to find the other variable.
    
            ### Example:
            For the system:
            \[
            \begin{align*}
            y &= 2x + 3 \quad (1) \\
            x + y &= 10 \quad (2)
            \end{align*}
            \]
            - From equation (1), we can express \(y\) in terms of \(x\): \(y = 2x + 3\).
            - Substitute into equation (2): \(x + (2x + 3) = 10\).
            - Solve: \(3x + 3 = 10\) → \(3x = 7\) → \(x = \frac{7}{3}\).
            - Substitute back: \(y = 2(\frac{7}{3}) + 3 = \frac{14}{3} + 3 = \frac{23}{3}\).
    
            ### Method 2: Elimination
            1. **Align the equations:** Write the equations one above the other.
            2. **Eliminate one variable:** Multiply one or both equations if necessary to align coefficients and then add or subtract to eliminate one variable.
            3. **Solve for the remaining variable:** Once one variable is eliminated, solve for the other.
            4. **Back-substitute:** Use the found value to determine the eliminated variable.
    
            Would you like to practice solving a specific system together?
        `;
    }
    else if (lowerCaseMessage.includes("how to find the derivative")) {
        return `
            To find the derivative of a function, you can follow these steps:
    
            ### Step 1: Understand the Definition
            The derivative of a function \(f(x)\) at a point gives the slope of the tangent line to the curve at that point. It is defined as:
            \[
            f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
            \]
    
            ### Step 2: Apply Derivative Rules
            Use basic rules of differentiation:
            - **Power Rule:** If \(f(x) = x^n\), then \(f'(x) = nx^{n-1}\).
            - **Product Rule:** If \(f(x) = u(x)v(x)\), then \(f'(x) = u'v + uv'\).
            - **Quotient Rule:** If \(f(x) = \frac{u(x)}{v(x)}\), then \(f'(x) = \frac{u'v - uv'}{v^2}\).
            - **Chain Rule:** If \(f(x) = g(h(x))\), then \(f'(x) = g'(h(x))h'(x)\).
    
            ### Example:
            For the function \(f(x) = 3x^2 + 5x - 4\):
            - Using the Power Rule: \(f'(x) = 6x + 5\).
    
            ### Step 3: Evaluate the Derivative
            If you need the slope at a specific point, substitute that \(x\) value into the derivative.
    
            Would you like to practice finding the derivative of a specific function together?
        `;
    }
    else if (lowerCaseMessage.includes("history") || lowerCaseMessage.includes("historical events")) {
        return `
            Analyzing historical events involves several key steps:
    
            ### Step 1: Identify the Event
            Begin by clearly defining the historical event you want to analyze. This includes dates, locations, and key figures involved.
    
            ### Step 2: Gather Primary and Secondary Sources
            - **Primary Sources:** Original documents or artifacts from the time (e.g., letters, photographs, official documents).
            - **Secondary Sources:** Analyses or interpretations of primary sources (e.g., books, articles).
    
            ### Step 3: Contextualize the Event
            Place the event within its broader historical context. Consider:
            - Economic, social, and political factors.
            - The historical period in which it occurred.
    
            ### Example:
            When analyzing the American Civil War (1861-1865):
            - **Primary Sources:** Letters from soldiers, government documents, photographs.
            - **Secondary Sources:** Historical analyses and documentaries.
    
            ![American Civil War](civil war.jpg)
            *Image: Union artillery during the Civil War*
    
            ### Step 4: Evaluate Impact
            Assess the short-term and long-term impacts of the event on society, politics, and culture.
    
            ### Step 5: Formulate a Thesis
            Develop a clear thesis statement that presents your main argument about the event's significance.
    
            Would you like to analyze a specific historical event together?
        `;
    }
        
    else if (lowerCaseMessage.includes("how to conduct a scientific experiment") || lowerCaseMessage.includes("scientific experiment")) {
        return `
            Conducting a scientific experiment involves a systematic approach:
    
            ### Step 1: Formulate a Hypothesis
            Start with a clear, testable hypothesis that predicts the outcome of your experiment.
    
            ### Step 2: Design the Experiment
            - **Identify Variables:**
                - **Independent Variable:** The factor you change.
                - **Dependent Variable:** The factor you measure.
                - **Controlled Variables:** Factors kept constant.
    
            ### Example:
            To test how light affects plant growth:
            - **Hypothesis:** Plants exposed to more light will grow taller.
            - **Independent Variable:** Amount of light.
            - **Dependent Variable:** Plant height.
            - **Controlled Variables:** Type of plant, soil type, water amount.
    
            ### Step 3: Conduct the Experiment
            Carry out the experiment while carefully documenting all observations and measurements.
    
            ![Plant Growth Experiment](plant.jpg)
            *Image: A plant growth experiment setup*
    
            ### Step 4: Analyze Data
            - Use statistical methods to analyze the results.
            - Determine if the hypothesis was supported or refuted.
    
            ### Step 5: Draw Conclusions
            Summarize findings and discuss the implications of the results. Consider potential sources of error and future research directions.
    
            Would you like to plan a specific experiment together?
        `;
    }
    else if (lowerCaseMessage.includes("how to use data analysis") || lowerCaseMessage.includes("data analysis tools")) {
        return `
            Using data analysis tools can help you make informed decisions based on data. Here are steps to get started:
    
            ### Step 1: Choose the Right Tool
            Select a tool based on your needs. Popular tools include:
            - **Excel:** Great for basic data analysis and visualization.
            - **Python with Pandas:** Powerful for handling large datasets.
            - **R:** Ideal for statistical analysis.
    
            ### Step 2: Import Data
            Load your data into the tool. This can be from a CSV file, database, or web scraping.
    
            ### Example: Importing Data in Python
           import pandas as pd

# Attempt to read the CSV file
try:
    data = pd.read_csv('data.csv')
    print("Data loaded successfully!")
except FileNotFoundError:
    print("Error: The file 'data.csv' was not found.")
except pd.errors.EmptyDataError:
    print("Error: The file 'data.csv' is empty.")
except pd.errors.ParserError:
    print("Error: There was a problem parsing 'data.csv'.")

    
            ![Data Analysis Tools](https://upload.wikimedia.org/wikipedia/commons/1/17/Pandas_data_analysis.png)
            *Image: Data analysis in Python with Pandas*
    
            ### Step 3: Clean the Data
            - Handle missing values, remove duplicates, and format data types as needed.
    
            ### Step 4: Analyze the Data
            - Use statistical methods, create visualizations, and draw insights.
    
            ### Step 5: Present Findings
            Summarize your analysis in reports or presentations, using charts and graphs to convey information clearly.
    
            Would you like to practice using a specific data analysis tool together?
        `;
    }
    
    else if (lowerCaseMessage.includes("basics of networking") || lowerCaseMessage.includes("computer networking basics")) {
        return `
            Understanding computer networking basics is crucial for IT professionals. Here are key concepts:
    
            ### Step 1: Learn About Networks
            A computer network is a collection of computers and devices connected to share resources. Types include:
            - **Local Area Network (LAN):** Limited to a small area.
            - **Wide Area Network (WAN):** Covers larger geographical areas.
    
            ### Step 2: Understand Networking Devices
            Key devices in networking include:
            - **Router:** Directs data between networks.
            - **Switch:** Connects devices within a LAN.
            - **Access Point:** Allows wireless devices to connect to a wired network.
    
            ![Networking Devices](networking.jpg)
            *Image: Common networking devices*
    
            ### Step 3: Learn About IP Addressing
            Every device on a network has a unique IP address that identifies it. Understand:
            - **IPv4:** Most common format (e.g., 192.168.1.1).
            - **IPv6:** Newer format to accommodate more devices.
    
            ### Step 4: Explore Protocols
            Protocols are rules that govern data communication. Common protocols include:
            - **TCP/IP:** Foundation of internet communication.
            - **HTTP/HTTPS:** Used for web browsing.
    
            ### Step 5: Practice Networking
            Set up a small network using home devices or virtual machines to gain hands-on experience.
    
            Would you like to dive deeper into any specific networking topic?
        `;
    }
    
    else if (lowerCaseMessage.includes("how history is written") ||lowerCaseMessage.includes("historical essay")) {
        return `
            Writing a historical essay requires careful research and clear argumentation. Here’s a step-by-step guide:
    
            ### Step 1: Choose a Topic
            Select a specific historical event, figure, or theme that interests you.
    
            ### Step 2: Conduct Research
            Gather information from primary and secondary sources. Take detailed notes and cite your sources.
    
            ### Step 3: Create a Thesis Statement
            Develop a clear thesis that outlines your main argument or perspective on the topic.
    
            ### Step 4: Outline Your Essay
            Structure your essay with an introduction, body paragraphs, and a conclusion:
            - **Introduction:** Present your topic and thesis.
            - **Body Paragraphs:** Each should focus on a specific point supporting your thesis.
            - **Conclusion:** Summarize your findings and restate the significance of your argument.
    
            ### Example Outline:
            1. **Introduction**
            2. **Body Paragraph 1:** Background of the event
            3. **Body Paragraph 2:** Key figures involved
            4. **Body Paragraph 3:** Impact of the event
            5. **Conclusion**
    
            ![Essay Structure](history.png)
            *Image: Structure of an essay*
    
            ### Step 5: Write and Revise
            Write your first draft, then revise for clarity, coherence, and grammatical accuracy.
    
            ### Step 6: Cite Your Sources
            Include a bibliography or works cited page following the required citation style (e.g., MLA, APA).
    
            Would you like help with a specific part of your essay or topic?
        `;
    }
    else if (lowerCaseMessage.includes("how to choose the right career in IT")) {
        return `
            ### Choosing the Right Career in IT
    
            Choosing the right career in Information Technology (IT) requires careful consideration of your interests, skills, and the job market. Here’s a step-by-step guide to help you navigate this process:
    
            1. **Assess Your Interests and Skills:**
               - Identify your interests within IT: Do you prefer coding, networking, cybersecurity, or data analysis?
               - Evaluate your skills: Are you analytical, creative, or technically inclined?
    
            2. **Research Career Paths:**
               - Investigate various IT roles, such as software developer, network engineer, data analyst, cybersecurity specialist, and IT project manager.
               - Look at job descriptions to understand the required skills and responsibilities for each role.
    
            3. **Consider the Job Market:**
               - Analyze the demand for specific IT roles in your region or online. Check job boards for the number of postings and required qualifications.
               - Explore industries that interest you, as many sectors rely on IT professionals (e.g., healthcare, finance, education).
    
            4. **Get Qualified:**
               - Enroll in relevant courses to build your skills and knowledge. Consider obtaining certifications in networking (Cisco), cybersecurity (CompTIA), or project management (PMP).
    
            5. **Gain Experience:**
               - Look for internships, volunteer opportunities, or freelance projects to gain practical experience. This will enhance your resume and help you understand different roles.
    
            6. **Network:**
               - Connect with professionals in the field through networking events, online forums, or social media. Networking can lead to job opportunities and mentorship.
    
            7. **Stay Updated:**
               - The IT field is constantly evolving. Stay informed about new technologies, trends, and certifications to remain competitive in your chosen career.
    
            If you have specific areas of interest or questions, feel free to ask for more details!
        `;
    }else if (lowerCaseMessage.includes("course overview in IT")) {
        return `
        ### Overview of Common IT Courses
    
        Here’s a detailed overview of ten IT courses that can help you build a strong foundation in various areas of Information Technology:
    
        1. **Introduction to Programming**
           - **Content:** Covers programming concepts, syntax, data types, and control structures. Languages often taught include Python, Java, and C++.
           - **Focus:** Building foundational coding skills and logical thinking.
    
        2. **Web Development**
           - **Content:** Teaches HTML, CSS, JavaScript, and frameworks like React or Angular. Topics include responsive design, user experience (UX), and backend development with Node.js or PHP.
           - **Focus:** Creating functional and visually appealing websites.
    
        3. **Database Management Systems**
           - **Content:** Introduction to database concepts, SQL queries, database design, normalization, and management systems like MySQL and PostgreSQL.
           - **Focus:** Understanding data storage, manipulation, and retrieval.
    
        4. **Networking Fundamentals**
           - **Content:** Basics of networking concepts, protocols, devices (routers, switches), and network design. Covers TCP/IP, the OSI model, and security basics.
           - **Focus:** Learning how networks operate and are structured.
    
        5. **Cybersecurity Essentials**
           - **Content:** Key concepts in cybersecurity, including threat modeling, encryption, security protocols, and risk management strategies.
           - **Focus:** Protecting systems and data from cyber threats.
    
        6. **Data Analysis and Visualization**
           - **Content:** Techniques for collecting, processing, and analyzing data using tools like Excel, R, or Python. Includes data visualization principles with libraries like Matplotlib or Tableau.
           - **Focus:** Making data-driven decisions through effective analysis and presentation.
    
        7. **Cloud Computing**
           - **Content:** Introduction to cloud services (IaaS, PaaS, SaaS), deployment models, and platforms like AWS, Azure, or Google Cloud.
           - **Focus:** Utilizing cloud technology for scalability and flexibility.
    
        8. **Mobile App Development**
           - **Content:** Fundamentals of developing applications for mobile platforms (iOS, Android) using languages like Swift or Kotlin, along with UI/UX principles.
           - **Focus:** Creating user-friendly and functional mobile applications.
    
        9. **Software Development Life Cycle (SDLC)**
           - **Content:** Phases of software development, methodologies (Agile, Waterfall), and project management principles.
           - **Focus:** Understanding how software projects are planned, executed, and managed.
    
        10. **Artificial Intelligence and Machine Learning**
            - **Content:** Introduction to AI concepts, machine learning algorithms, data training, and tools like TensorFlow or Scikit-learn.
            - **Focus:** Applying AI techniques to solve real-world problems.
    
        Each of these courses provides essential skills that can lead to various career opportunities in the IT industry. If you would like to explore a specific course in more detail or have other questions, let me know!
        `;
    }
    
else if (lowerCaseMessage.includes("what is multimedia") || lowerCaseMessage.includes("history of multimedia")) {
    return `
        ### What is Multimedia?

        Multimedia refers to the integration of various forms of content such as text, audio, images, animation, video, and interactive content to convey information or tell a story. It enhances user experience by engaging multiple senses and can be found in various applications, including websites, presentations, video games, and educational materials.

        ### History of Multimedia

        The concept of multimedia dates back to the early days of human communication but evolved significantly with technology:
        - **Early Forms:** The use of images alongside text in manuscripts and illustrated storytelling.
        - **20th Century:** The introduction of audio-visual aids in education, such as film strips and projectors.
        - **1970s-1980s:** The rise of personal computing led to the development of multimedia software, with early examples like HyperCard.
        - **1990s-Present:** The explosion of the internet facilitated the widespread use of multimedia in digital formats, with advancements in streaming video, interactive media, and virtual reality.

        If you’d like to know more about specific aspects of multimedia, feel free to ask!
    `;
} else if (lowerCaseMessage.includes("fundamentals of multimedia")) {
    return `
        ### Fundamentals of Multimedia

        The fundamentals of multimedia encompass the basic concepts and techniques involved in creating and managing multimedia content. Key components include:

        1. **Text:** The primary way to convey information.
        2. **Audio:** Sound elements that enhance storytelling or provide information, such as voiceovers or background music.
        3. **Images:** Visual representations that support and illustrate content.
        4. **Animation:** Dynamic visuals that can capture attention and explain complex concepts through movement.
        5. **Video:** A combination of moving images and sound, commonly used for tutorials, advertisements, and entertainment.
        6. **Interactivity:** Engaging users through actions like clicking, dragging, or navigating within a digital environment.

        Understanding these fundamentals is crucial for anyone interested in creating effective multimedia content.
    `;
} else if (lowerCaseMessage.includes("job opportunities in multimedia")) {
    return `
        ### Job Opportunities in Multimedia

        The field of multimedia offers a variety of job opportunities, including:

        1. **Multimedia Artist/Animator:** Create animations and visual effects for film, video games, or websites.
        2. **Graphic Designer:** Design visuals for branding, marketing materials, or online content.
        3. **Web Designer:** Develop visually appealing and user-friendly websites using multimedia elements.
        4. **Video Editor:** Edit raw footage into polished videos for various media platforms.
        5. **Sound Designer:** Create and manipulate audio elements for films, games, or music.

        These roles can be found in industries such as entertainment, advertising, education, and corporate communications.
    `;
} else if (lowerCaseMessage.includes("system analysis and design")) {
    return `
        ### System Analysis and Design

        System Analysis and Design is the process of studying and defining business requirements and designing information systems to meet those needs. The course typically covers:

        1. **Systems Development Life Cycle (SDLC):** The phases of developing information systems, including planning, analysis, design, implementation, and maintenance.
        2. **Requirements Gathering:** Techniques for collecting and documenting user needs.
        3. **Modeling Techniques:** Using diagrams (like flowcharts and data flow diagrams) to visualize system processes and structures.
        4. **Testing and Evaluation:** Ensuring systems meet requirements and function correctly before deployment.

        This course prepares students for analyzing existing systems and designing new solutions to improve organizational efficiency.
    `;
} else if (lowerCaseMessage.includes("job opportunities in system analysis and design")) {
    return `
        ### Job Opportunities in System Analysis and Design

        Graduates of System Analysis and Design can pursue several career paths, including:

        1. **System Analyst:** Evaluate and improve computer systems for organizations.
        2. **Business Analyst:** Work with stakeholders to understand business needs and develop solutions.
        3. **Project Manager:** Oversee projects to ensure they are completed on time and within budget.
        4. **IT Consultant:** Advise organizations on technology strategies and system implementations.

        These roles are essential in various sectors, including finance, healthcare, and technology.
    `;
} else if (lowerCaseMessage.includes("resources required for system analysis and design")) {
    return `
        ### Resources Required for System Analysis and Design

        Students in System Analysis and Design typically need the following resources:

        1. **Textbooks:** Essential readings on system development methodologies, project management, and analysis techniques.
        2. **Software Tools:** Familiarity with modeling software (e.g., Visio, Lucidchart) and project management tools (e.g., Microsoft Project, Trello).
        3. **Case Studies:** Real-world examples to understand practical applications of concepts.
        4. **Online Resources:** Access to tutorials, webinars, and forums for ongoing learning and support.

        Utilizing these resources effectively can enhance understanding and practical application of the course content.
    `;
} else if (lowerCaseMessage.includes("data communications and network i")) {
    return `
        ### Data Communications and Network I

        Data Communications and Network I is an introductory course covering the fundamentals of data communication systems and networking. Key topics include:

        1. **Basic Concepts of Networking:** Understanding networks, topologies, and protocols.
        2. **Transmission Media:** Exploring different types of media (cables, fiber optics, wireless) used in data transmission.
        3. **Networking Models:** Introduction to the OSI and TCP/IP models and their layers.
        4. **Network Devices:** Overview of routers, switches, and modems, and their roles in networks.

        This course lays the groundwork for understanding more complex networking concepts and technologies.
    `;
} else if (lowerCaseMessage.includes("job opportunities in data communications and network i")) {
    return `
        ### Job Opportunities in Data Communications and Network I

        Completing a course in Data Communications and Network I can lead to various job opportunities, such as:

        1. **Network Administrator:** Manage and maintain an organization’s computer networks.
        2. **Network Engineer:** Design and implement data communication networks.
        3. **Technical Support Specialist:** Provide assistance with networking hardware and software issues.
        4. **System Analyst:** Analyze and optimize data communication systems for organizations.

        These positions are vital in IT departments across various industries.
    `;
} else if (lowerCaseMessage.includes("resources required for data communications and network i")) {
    return `
        ### Resources Required for Data Communications and Network I

        To succeed in Data Communications and Network I, students should utilize the following resources:

        1. **Textbooks:** Comprehensive readings on networking fundamentals and protocols.
        2. **Simulation Software:** Tools like Cisco Packet Tracer for practicing network configuration and design.
        3. **Lab Equipment:** Access to routers, switches, and other networking devices for hands-on experience.
        4. **Online Courses and Tutorials:** Supplementary materials for deeper understanding of complex topics.

        Leveraging these resources can enhance practical skills and theoretical knowledge in networking.
    `;
}
else if (lowerCaseMessage.includes("computer architecture")) {
    return `
        ### Computer Architecture

        Computer Architecture refers to the design and organization of computer systems, focusing on how various components work together to process information. Key topics include:

        1. **Basic Concepts:** Understanding the fundamental principles of computer organization, including the CPU, memory hierarchy, and input/output systems.
        2. **Data Representation:** How data is represented in a computer, including binary systems, character encoding, and data formats.
        3. **Instruction Set Architecture (ISA):** The part of the processor that defines the machine code instructions that a CPU can execute.
        4. **Performance Measurement:** Techniques for evaluating and optimizing computer performance, including benchmarks and profiling.

        This course provides a foundation for understanding how computers function at a hardware level and prepares students for more advanced studies in computer science and engineering.
    `;
} else if (lowerCaseMessage.includes("job opportunities in computer architecture")) {
    return `
        ### Job Opportunities in Computer Architecture

        Graduates in Computer Architecture can pursue various career paths, including:

        1. **Computer Hardware Engineer:** Design and test computer hardware components.
        2. **Systems Architect:** Develop and optimize computer systems for performance and efficiency.
        3. **Embedded Systems Engineer:** Work on hardware and software for embedded systems in devices like appliances and vehicles.
        4. **Performance Analyst:** Analyze and improve system performance for computing applications.

        These roles are crucial in technology companies, research institutions, and manufacturing industries.
    `;
} else if (lowerCaseMessage.includes("resources required for computer architecture")) {
    return `
        ### Resources Required for Computer Architecture

        To excel in Computer Architecture, students should utilize the following resources:

        1. **Textbooks:** Essential readings on computer organization and design.
        2. **Simulation Software:** Tools for modeling and simulating computer architectures, such as Logisim or ModelSim.
        3. **Laboratory Equipment:** Access to hardware kits for practical experimentation with computer components.
        4. **Online Resources:** Access to lecture notes, tutorials, and forums for additional learning and support.

        Utilizing these resources can greatly enhance theoretical knowledge and practical skills in computer architecture.
    `;
} else if (lowerCaseMessage.includes("african studies")) {
    return `
        ### African Studies

        African Studies is an interdisciplinary field that explores the cultures, histories, societies, and politics of Africa. Key topics include:

        1. **History and Politics:** Understanding the historical developments, political systems, and contemporary issues in various African countries.
        2. **Culture and Society:** Examining the diverse cultures, languages, religions, and social structures across the continent.
        3. **Economics and Development:** Analyzing economic trends, development challenges, and the impact of globalization on African nations.
        4. **Art and Literature:** Exploring African artistic expressions and literary works that reflect the continent’s rich heritage.

        This course provides a comprehensive understanding of Africa’s complexity and diversity, fostering critical thinking about global issues.
    `;
} else if (lowerCaseMessage.includes("job opportunities in african studies")) {
    return `
        ### Job Opportunities in African Studies

        Graduates in African Studies can pursue several career paths, including:

        1. **Cultural Anthropologist:** Study and research cultural practices in African communities.
        2. **Policy Analyst:** Work with organizations to analyze and develop policies related to African affairs.
        3. **International Relations Specialist:** Focus on diplomatic and international relations involving African countries.
        4. **Educator:** Teach African history, culture, and languages at various educational levels.

        These roles can be found in academia, non-profit organizations, government agencies, and international institutions.
    `;
} else if (lowerCaseMessage.includes("technical communication skills")) {
    return `
        ### Technical Communication Skills

        Technical Communication Skills involve the ability to convey complex information clearly and effectively, often in technical contexts. Key components include:

        1. **Writing Skills:** Crafting clear and concise documents such as reports, manuals, and proposals.
        2. **Visual Communication:** Using diagrams, charts, and graphics to enhance understanding of technical information.
        3. **Presentation Skills:** Effectively delivering information through oral presentations and visual aids.
        4. **Audience Analysis:** Understanding and addressing the needs of different audiences to ensure effective communication.

        Mastery of these skills is essential in fields such as engineering, IT, healthcare, and business.
    `;
} else if (lowerCaseMessage.includes("job opportunities in technical communication skills")) {
    return `
        ### Job Opportunities in Technical Communication Skills

        Professionals with strong technical communication skills can find job opportunities in various fields, including:

        1. **Technical Writer:** Create user manuals, product documentation, and online help content.
        2. **Instructional Designer:** Develop educational materials and training programs for organizations.
        3. **Communications Specialist:** Manage communication strategies within organizations, including press releases and internal communications.
        4. **User Experience (UX) Writer:** Write clear and user-friendly content for websites and applications.

        These roles are essential for ensuring that technical information is accessible and understandable to diverse audiences.
    `;
} else if (lowerCaseMessage.includes("resources required for technical communication skills")) {
    return `
        ### Resources Required for Technical Communication Skills

        To develop effective Technical Communication Skills, students should utilize the following resources:

        1. **Textbooks:** Recommended readings on technical writing, communication theory, and visual design.
        2. **Software Tools:** Familiarity with documentation software (e.g., MadCap Flare, Adobe FrameMaker) and graphic design tools (e.g., Adobe Illustrator).
        3. **Workshops and Seminars:** Participation in training sessions focused on writing and communication skills.
        4. **Online Courses:** Access to platforms offering courses on technical communication, writing styles, and presentation skills.

        Leveraging these resources can significantly enhance communication effectiveness in professional settings.
    `;
}

    
    else if (lowerCaseMessage.includes("how to graph") || lowerCaseMessage.includes("linear equation")) {
        return `
            To graph a linear equation, you can follow these steps:
    
            ### Step 1: Understand the Equation
            Linear equations are typically in the form **y = mx + b**, where:
            - **m** is the slope (rise over run), which indicates how steep the line is.
            - **b** is the y-intercept, which is the point where the line crosses the y-axis.
    
            ### Step 2: Identify Points
            To graph the equation, find at least two points that satisfy it. You can choose values for **x** and calculate the corresponding **y** values.
    
            ### Example 1:
            For the equation **y = 2x + 1**:
            1. **Choose x-values:** Let's choose x = 0 and x = 2.
            2. **Calculate y-values:**
               - For x = 0: y = 2(0) + 1 = 1 → Point (0, 1)
               - For x = 2: y = 2(2) + 1 = 5 → Point (2, 5)
            3. **Plot the points:** Plot (0, 1) and (2, 5) on the graph.
            4. **Draw the line:** Connect the points with a straight line extending in both directions.
    
            ### Example 2:
            For the equation **y = -x + 4**:
            1. **Choose x-values:** Let's choose x = 0 and x = 4.
            2. **Calculate y-values:**
               - For x = 0: y = -(0) + 4 = 4 → Point (0, 4)
               - For x = 4: y = -(4) + 4 = 0 → Point (4, 0)
            3. **Plot the points:** Plot (0, 4) and (4, 0) on the graph.
            4. **Draw the line:** Connect the points with a straight line extending in both directions.
    
            ### Step 3: Use the Slope and Y-Intercept
            If you're given the slope and y-intercept directly, you can start from the y-intercept and use the slope to find another point:
            - For example, if you have **y = 3x - 2**, you start at (0, -2) on the y-axis (the y-intercept) and then from there, rise 3 units up and run 1 unit to the right to find another point (1, 1).
    
            ### Final Tips:
            - Ensure you label your axes and mark the scale clearly.
            - You can also check your graph by substituting back the coordinates into the original equation to verify they satisfy it.
    
            Would you like to practice graphing a specific linear equation together?
        `;
    }
    
    else if (lowerCaseMessage.includes("calculate") || lowerCaseMessage.includes("math")) {
        return "I can help with calculations! Please enter your equation (like '2 + 2' or '3 * (4 + 5)').";
    } else {
        const calculationRegex = /(-?\d+(\.\d+)?)(\s*[\+\-\*\/]\s*(-?\d+(\.\d+)?))+/g;
        const match = lowerCaseMessage.match(calculationRegex);
    
        if (match) {
            try {
                const result = eval(match[0]); // Use eval cautiously
                return `The result is: ${result}`;
            } catch (error) {
                return "Sorry, I couldn't calculate that. Please check your input.";
            }
        }
    
        // General responses
        const responses = {
            "hello": "Hi there! 😊 I'm here to help you with anything you need. What’s on your mind today?",
            "how are you?": "I'm just a bot, but I'm always ready to chat and assist you! How can I brighten your day?",
            "bye": "Goodbye! 👋 Remember, I'm always here whenever you need assistance. Have a fantastic day!",
            "what is your name?": "I'm Chichibot, your friendly chatbot companion! I’m here to answer your questions and have some fun along the way!",
            "help": "Absolutely! 🤗 I'm ready to assist you with anything from math problems to emotional support. Just let me know what you need help with!"
        };
    
        // Check if the user message is in the predefined responses
        if (responses[lowerCaseMessage]) {
            return responses[lowerCaseMessage];
        }
    
        // Default response
        return "I'm not sure how to respond to that. Could you please provide more details or ask about something specific?";
    }
}function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = content;
    document.getElementById('messages').appendChild(messageDiv);
}
