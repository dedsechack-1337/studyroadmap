import { Phase, Topic } from "../types";

export const phases: Phase[] = [
  { id: 1, name: "Mathematical Foundations", color: "violet", gradient: "from-violet-500 to-purple-600", icon: "📐" },
  { id: 2, name: "Core University Mathematics", color: "blue", gradient: "from-blue-500 to-cyan-600", icon: "🎓" },
  { id: 3, name: "Statistics & Probability", color: "emerald", gradient: "from-emerald-500 to-teal-600", icon: "📊" },
  { id: 4, name: "Computer Science Mathematics", color: "orange", gradient: "from-orange-500 to-amber-600", icon: "💻" },
  { id: 5, name: "Engineering Mathematics", color: "rose", gradient: "from-rose-500 to-pink-600", icon: "⚙️" },
  { id: 6, name: "Signals, Control & Information", color: "indigo", gradient: "from-indigo-500 to-blue-600", icon: "📡" },
  { id: 7, name: "Physics Mathematics", color: "yellow", gradient: "from-yellow-500 to-orange-500", icon: "⚛️" },
  { id: 8, name: "Advanced Mathematics", color: "slate", gradient: "from-slate-600 to-gray-700", icon: "🔬" },
  { id: 9, name: "Research-Level Topics", color: "red", gradient: "from-red-500 to-rose-600", icon: "🚀" },
];

export const topics: Topic[] = [
  // ─── PHASE 1 ─────────────────────────────────────────────────────────
  {
    id: "t1", number: 1, title: "Arithmetic", phase: 1, phaseName: "Mathematical Foundations",
    why: "Foundation of all mathematics — every other field builds on arithmetic operations.",
    subtopics: [
      {
        id: "t1-s1", title: "Natural Numbers & Integers",
        description: "Natural numbers are positive whole numbers (1,2,3,...). Integers include negatives and zero (...,-2,-1,0,1,2,...).",
        example: "3 + (-5) = -2 | |-7| = 7",
        formula: "a + (-a) = 0  (additive inverse)"
      },
      {
        id: "t1-s2", title: "Fractions & Decimals",
        description: "Fractions represent parts of a whole (a/b). Decimals are fractions in base-10 notation.",
        example: "3/4 = 0.75 | 1/3 = 0.333...",
        formula: "a/b + c/d = (ad + bc) / bd"
      },
      {
        id: "t1-s3", title: "Percentages",
        description: "A percentage expresses a number as a fraction of 100.",
        example: "25% of 80 = 0.25 × 80 = 20",
        formula: "Percentage = (Part / Whole) × 100"
      },
      {
        id: "t1-s4", title: "Ratio & Proportion",
        description: "Ratio compares two quantities. Proportion states that two ratios are equal.",
        example: "If a:b = 2:3, and b=9, then a = 6",
        formula: "a/b = c/d ⟹ ad = bc (cross multiplication)"
      },
      {
        id: "t1-s5", title: "Powers & Roots",
        description: "Powers represent repeated multiplication. Roots are the inverse operation.",
        example: "2⁴ = 16 | √16 = 4 | ∛27 = 3",
        formula: "aᵐ × aⁿ = aᵐ⁺ⁿ | (aᵐ)ⁿ = aᵐⁿ | a⁰ = 1"
      },
      {
        id: "t1-s6", title: "Scientific Notation",
        description: "Expresses very large or very small numbers as a × 10ⁿ where 1 ≤ a < 10.",
        example: "0.00045 = 4.5 × 10⁻⁴ | 300,000 = 3 × 10⁵",
        formula: "a × 10ⁿ × b × 10ᵐ = (ab) × 10ⁿ⁺ᵐ"
      },
      {
        id: "t1-s7", title: "HCF & LCM",
        description: "HCF (Highest Common Factor) is the largest divisor of two numbers. LCM (Least Common Multiple) is the smallest multiple.",
        example: "HCF(12,18) = 6 | LCM(4,6) = 12",
        formula: "HCF(a,b) × LCM(a,b) = a × b"
      },
    ]
  },
  {
    id: "t2", number: 2, title: "Basic Algebra", phase: 1, phaseName: "Mathematical Foundations",
    why: "Algebra is the language of mathematics — needed in every computation, algorithm, and formula.",
    subtopics: [
      {
        id: "t2-s1", title: "Variables & Expressions",
        description: "Variables are symbols (x, y, z) representing unknown quantities. Expressions combine variables and constants with operations.",
        example: "3x + 2y - 7 is an algebraic expression",
        formula: "Substitution: if x=2, then 3x+1 = 3(2)+1 = 7"
      },
      {
        id: "t2-s2", title: "Linear Equations",
        description: "Equations where the highest power of the variable is 1. Solution is a single value.",
        example: "2x + 5 = 13 → 2x = 8 → x = 4",
        formula: "ax + b = 0 → x = -b/a"
      },
      {
        id: "t2-s3", title: "Inequalities",
        description: "Expressions comparing two quantities using <, >, ≤, ≥. Solutions are ranges of values.",
        example: "3x - 2 > 7 → 3x > 9 → x > 3",
        formula: "If a > b and c < 0, then ac < bc (flip inequality when multiplying by negative)"
      },
      {
        id: "t2-s4", title: "Polynomials",
        description: "Expressions with multiple terms involving non-negative integer powers of variables.",
        example: "4x³ - 2x² + 7x - 1 is a degree-3 polynomial",
        formula: "(a+b)² = a² + 2ab + b² | (a-b)² = a² - 2ab + b² | (a+b)(a-b) = a² - b²"
      },
      {
        id: "t2-s5", title: "Factoring",
        description: "Rewriting a polynomial as a product of simpler polynomials.",
        example: "x² - 5x + 6 = (x-2)(x-3)",
        formula: "x² + (a+b)x + ab = (x+a)(x+b)"
      },
      {
        id: "t2-s6", title: "Quadratic Equations",
        description: "Polynomial equations of degree 2. Can have 0, 1, or 2 real solutions.",
        example: "x² - 5x + 6 = 0 → (x-2)(x-3)=0 → x=2 or x=3",
        formula: "x = [-b ± √(b²-4ac)] / 2a   (Quadratic Formula)"
      },
    ]
  },
  {
    id: "t3", number: 3, title: "Geometry", phase: 1, phaseName: "Mathematical Foundations",
    why: "Spatial reasoning is essential for robotics, computer graphics, physics, and computer vision.",
    subtopics: [
      {
        id: "t3-s1", title: "Lines & Angles",
        description: "Lines extend infinitely in both directions. Angles measure rotation between two rays.",
        example: "Complementary: 30°+60°=90° | Supplementary: 120°+60°=180°",
        formula: "Sum of angles in a triangle = 180°"
      },
      {
        id: "t3-s2", title: "Triangles",
        description: "Three-sided polygons. Types: equilateral, isosceles, scalene, right-angled.",
        example: "Right triangle with legs 3,4 has hypotenuse 5",
        formula: "Area = ½ × base × height | Pythagorean: a² + b² = c²"
      },
      {
        id: "t3-s3", title: "Circles",
        description: "Set of all points equidistant from a center point. Key parts: radius, diameter, chord, arc.",
        example: "Circle with r=7: Area = 49π ≈ 153.94",
        formula: "Area = πr² | Circumference = 2πr | Arc length = rθ (θ in radians)"
      },
      {
        id: "t3-s4", title: "Coordinate Geometry",
        description: "Geometry using coordinate systems. Links algebra and geometry.",
        example: "Distance between (1,2) and (4,6) = √(9+16) = 5",
        formula: "Distance = √[(x₂-x₁)²+(y₂-y₁)²] | Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)"
      },
      {
        id: "t3-s5", title: "3D Geometry",
        description: "Extension of geometry to three dimensions — cubes, spheres, cylinders, cones.",
        example: "Sphere r=3: Volume = 4π(27)/3 = 36π",
        formula: "Sphere Volume = (4/3)πr³ | Cylinder Volume = πr²h"
      },
    ]
  },
  {
    id: "t4", number: 4, title: "Trigonometry", phase: 1, phaseName: "Mathematical Foundations",
    why: "Used in signal processing, robotics kinematics, electronics (AC circuits), and physics.",
    subtopics: [
      {
        id: "t4-s1", title: "sin, cos, tan",
        description: "Ratios of sides in a right triangle. sin=opposite/hypotenuse, cos=adjacent/hypotenuse, tan=opposite/adjacent.",
        example: "In a 3-4-5 triangle: sin=3/5=0.6, cos=4/5=0.8, tan=3/4=0.75",
        formula: "sin²θ + cos²θ = 1 | tan θ = sin θ / cos θ"
      },
      {
        id: "t4-s2", title: "Unit Circle",
        description: "Circle of radius 1 centered at origin. Defines trig functions for all angles.",
        example: "cos(60°)=0.5, sin(60°)=√3/2 | cos(90°)=0, sin(90°)=1",
        formula: "Point on unit circle: (cos θ, sin θ)"
      },
      {
        id: "t4-s3", title: "Trig Identities",
        description: "Equations involving trig functions that hold for all valid angles.",
        example: "sin(A+B) = sinA·cosB + cosA·sinB",
        formula: "cos(2θ) = cos²θ - sin²θ = 2cos²θ-1 = 1-2sin²θ"
      },
      {
        id: "t4-s4", title: "Inverse Trigonometry",
        description: "arcsin, arccos, arctan — return the angle whose trig value is given.",
        example: "arcsin(0.5) = 30° | arctan(1) = 45°",
        formula: "arctan(y/x) gives angle in right triangle"
      },
      {
        id: "t4-s5", title: "Polar Coordinates",
        description: "Represent points using distance r from origin and angle θ from positive x-axis.",
        example: "Cartesian (1,1) = Polar (√2, 45°)",
        formula: "x = r·cosθ | y = r·sinθ | r = √(x²+y²)"
      },
    ]
  },
  {
    id: "t5", number: 5, title: "Precalculus", phase: 1, phaseName: "Mathematical Foundations",
    why: "Bridge between algebra/trig and calculus. Introduces the function concept used everywhere.",
    subtopics: [
      {
        id: "t5-s1", title: "Functions",
        description: "A rule that assigns exactly one output to each input. Notation: f(x).",
        example: "f(x) = x² → f(3) = 9 | Domain of f(x)=√x is x≥0",
        formula: "Composition: (f∘g)(x) = f(g(x)) | Inverse: f⁻¹(f(x)) = x"
      },
      {
        id: "t5-s2", title: "Graphs",
        description: "Visual representations of functions. Key features: intercepts, symmetry, asymptotes.",
        example: "y = x² is a parabola opening upward with vertex at origin",
        formula: "Slope of line: m = (y₂-y₁)/(x₂-x₁) | Line: y = mx + b"
      },
      {
        id: "t5-s3", title: "Logarithms",
        description: "Inverse of exponential functions. logₐ(b) = c means aᶜ = b.",
        example: "log₂(8) = 3 since 2³=8 | log₁₀(1000) = 3",
        formula: "log(ab) = log a + log b | log(aⁿ) = n·log a | logₐ b = ln b / ln a"
      },
      {
        id: "t5-s4", title: "Exponential Functions",
        description: "Functions of the form f(x) = aˣ. Model growth and decay.",
        example: "Population doubling: P(t) = P₀ · 2^(t/T)",
        formula: "e ≈ 2.718 | eˣ · eʸ = eˣ⁺ʸ | d/dx(eˣ) = eˣ"
      },
      {
        id: "t5-s5", title: "Sequences & Series",
        description: "Sequences are ordered lists of numbers. Series is the sum of sequence terms.",
        example: "Arithmetic: 2,5,8,11,... | Geometric: 2,6,18,54,...",
        formula: "Arithmetic sum: Sₙ = n(a₁+aₙ)/2 | Geometric sum: Sₙ = a(rⁿ-1)/(r-1)"
      },
    ]
  },
  // ─── PHASE 2 ─────────────────────────────────────────────────────────
  {
    id: "t6", number: 6, title: "Calculus I", phase: 2, phaseName: "Core University Mathematics",
    why: "Enables optimization — the heartbeat of AI, machine learning, and engineering design.",
    subtopics: [
      {
        id: "t6-s1", title: "Limits",
        description: "The value a function approaches as the input approaches some value.",
        example: "lim(x→2) of x² = 4 | lim(x→0) sin(x)/x = 1",
        formula: "ε-δ definition: ∀ε>0, ∃δ>0: |x-a|<δ ⟹ |f(x)-L|<ε"
      },
      {
        id: "t6-s2", title: "Continuity",
        description: "A function is continuous at a if lim(x→a)f(x) = f(a). No jumps or holes.",
        example: "f(x)=1/x is discontinuous at x=0",
        formula: "Intermediate Value Theorem: continuous on [a,b] → takes all values between f(a) and f(b)"
      },
      {
        id: "t6-s3", title: "Derivatives",
        description: "Measure instantaneous rate of change. Slope of the tangent line.",
        example: "d/dx(x³) = 3x² | d/dx(sin x) = cos x",
        formula: "f'(x) = lim(h→0) [f(x+h)-f(x)] / h | Chain Rule: (f∘g)' = f'(g(x))·g'(x)"
      },
      {
        id: "t6-s4", title: "Applications of Derivatives",
        description: "Finding maxima/minima, optimization problems, related rates, curve sketching.",
        example: "f(x) = x³ - 3x has local max at x=-1, local min at x=1",
        formula: "Critical points: f'(x) = 0 | f''(x) > 0 → min | f''(x) < 0 → max"
      },
    ]
  },
  {
    id: "t7", number: 7, title: "Calculus II", phase: 2, phaseName: "Core University Mathematics",
    why: "Integration is essential for physics (work, energy), probability distributions, and engineering.",
    subtopics: [
      {
        id: "t7-s1", title: "Integration",
        description: "The reverse of differentiation. Computes area under a curve.",
        example: "∫x² dx = x³/3 + C | ∫cos(x) dx = sin(x) + C",
        formula: "Fundamental Theorem: ∫ₐᵇ f(x)dx = F(b) - F(a) where F'=f"
      },
      {
        id: "t7-s2", title: "Applications of Integrals",
        description: "Area between curves, volumes of solids, work, arc length, center of mass.",
        example: "Area between y=x² and y=x from 0 to 1 is 1/6",
        formula: "Volume (disk method): V = π∫[f(x)]² dx"
      },
      {
        id: "t7-s3", title: "Infinite Series",
        description: "Sum of infinitely many terms. Convergence determines if sum is finite.",
        example: "∑(1/2ⁿ) from n=1 to ∞ = 1 | Taylor: eˣ = 1 + x + x²/2! + x³/3! + ...",
        formula: "Ratio test: lim|aₙ₊₁/aₙ| < 1 → converges"
      },
    ]
  },
  {
    id: "t8", number: 8, title: "Calculus III", phase: 2, phaseName: "Core University Mathematics",
    why: "Multivariable calculus is the foundation of ML gradients, robotics, and 3D physics.",
    subtopics: [
      {
        id: "t8-s1", title: "Partial Derivatives",
        description: "Derivative with respect to one variable while others are held constant.",
        example: "f(x,y)=x²y → ∂f/∂x=2xy | ∂f/∂y=x²",
        formula: "Gradient: ∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)"
      },
      {
        id: "t8-s2", title: "Multiple Integrals",
        description: "Integration over 2D regions (double integrals) or 3D regions (triple integrals).",
        example: "∬ₐ xy dA over region D",
        formula: "∬ f(x,y) dA = ∫∫ f(x,y) dy dx (iterate)"
      },
      {
        id: "t8-s3", title: "Vector Functions",
        description: "Functions that output vectors. Used for curves and surfaces in 3D.",
        example: "r(t) = (cos t, sin t, t) traces a helix",
        formula: "Arc length: L = ∫|r'(t)| dt | Curvature: κ = |r'×r''| / |r'|³"
      },
    ]
  },
  {
    id: "t9", number: 9, title: "Linear Algebra", phase: 2, phaseName: "Core University Mathematics",
    why: "The engine of AI, machine learning, graphics, signal processing, and quantum computing.",
    subtopics: [
      {
        id: "t9-s1", title: "Vectors",
        description: "Quantities with magnitude and direction. Represented as arrays of numbers.",
        example: "v = [3, -2, 5] | |v| = √(9+4+25) = √38",
        formula: "Dot product: a·b = |a||b|cos θ | Cross product gives perpendicular vector"
      },
      {
        id: "t9-s2", title: "Matrices",
        description: "Rectangular arrays of numbers. Represent linear transformations.",
        example: "A·B ≠ B·A in general (non-commutative)",
        formula: "(AB)ᵀ = BᵀAᵀ | (AB)⁻¹ = B⁻¹A⁻¹"
      },
      {
        id: "t9-s3", title: "Determinants",
        description: "Scalar value from a square matrix. Indicates if matrix is invertible.",
        example: "det([a,b;c,d]) = ad - bc | det=0 means singular (non-invertible)",
        formula: "det(AB) = det(A)·det(B) | det(Aᵀ) = det(A)"
      },
      {
        id: "t9-s4", title: "Eigenvalues & Eigenvectors",
        description: "Av = λv: vector v is scaled by factor λ under transformation A.",
        example: "PCA in ML uses eigenvectors to find principal components",
        formula: "det(A - λI) = 0 → find λ (eigenvalues) → solve (A-λI)v=0"
      },
      {
        id: "t9-s5", title: "Vector Spaces",
        description: "Abstract spaces where vectors can be added and scaled. Foundation of linear algebra.",
        example: "ℝ³ is a vector space | set of polynomials is a vector space",
        formula: "Basis: linearly independent set that spans the space | dim = number of basis vectors"
      },
    ]
  },
  {
    id: "t10", number: 10, title: "Advanced Linear Algebra", phase: 2, phaseName: "Core University Mathematics",
    why: "SVD powers recommendation systems, image compression (JPEG), and NLP transformers.",
    subtopics: [
      {
        id: "t10-s1", title: "Orthogonality",
        description: "Vectors are orthogonal if their dot product is 0. Orthonormal: orthogonal + unit length.",
        example: "Gram-Schmidt process converts any basis to orthonormal basis",
        formula: "QᵀQ = I for orthogonal matrix Q | Projection: proj_b(a) = (a·b/|b|²)b"
      },
      {
        id: "t10-s2", title: "Spectral Theory",
        description: "Study of eigenvalues and eigenvectors of operators. Key to understanding transformations.",
        example: "Spectral theorem: symmetric matrices have real eigenvalues and orthogonal eigenvectors",
        formula: "A = PDP⁻¹ (diagonalization) | A = QDQᵀ (for symmetric A)"
      },
      {
        id: "t10-s3", title: "Singular Value Decomposition (SVD)",
        description: "A = UΣVᵀ — decomposes any matrix into rotation, scaling, rotation.",
        example: "Image compression: keep top-k singular values to approximate image",
        formula: "A = UΣVᵀ | σ₁ ≥ σ₂ ≥ ... ≥ 0 (singular values)"
      },
      {
        id: "t10-s4", title: "Tensor Algebra",
        description: "Generalization of matrices to arbitrary dimensions. Used in deep learning frameworks.",
        example: "RGB image = 3D tensor (height × width × channels)",
        formula: "Tensor contraction generalizes matrix multiplication"
      },
    ]
  },
  // ─── PHASE 3 ─────────────────────────────────────────────────────────
  {
    id: "t11", number: 11, title: "Probability", phase: 3, phaseName: "Statistics & Probability",
    why: "Core to AI decision-making, cybersecurity threat modeling, and ML model evaluation.",
    subtopics: [
      {
        id: "t11-s1", title: "Sample Space & Events",
        description: "Sample space Ω is all possible outcomes. An event is a subset of Ω.",
        example: "Coin flip: Ω = {H, T} | Event A = {H} has P(A) = 0.5",
        formula: "0 ≤ P(A) ≤ 1 | P(Ω) = 1 | P(A∪B) = P(A)+P(B)-P(A∩B)"
      },
      {
        id: "t11-s2", title: "Conditional Probability",
        description: "Probability of event A given event B has occurred.",
        example: "P(rain|cloudy) — probability of rain given it is cloudy",
        formula: "P(A|B) = P(A∩B) / P(B)"
      },
      {
        id: "t11-s3", title: "Independence",
        description: "Two events are independent if knowing one doesn't change probability of the other.",
        example: "Two fair coin flips are independent",
        formula: "Independent ⟺ P(A∩B) = P(A)·P(B)"
      },
      {
        id: "t11-s4", title: "Bayes Theorem",
        description: "Updates probability of a hypothesis based on new evidence.",
        example: "Medical test: P(disease|positive test) given test accuracy and disease prevalence",
        formula: "P(A|B) = P(B|A)·P(A) / P(B)"
      },
    ]
  },
  {
    id: "t12", number: 12, title: "Statistics", phase: 3, phaseName: "Statistics & Probability",
    why: "Data analysis backbone for all empirical sciences and software performance evaluation.",
    subtopics: [
      {
        id: "t12-s1", title: "Mean, Median, Mode",
        description: "Measures of central tendency. Mean=average, Median=middle value, Mode=most frequent.",
        example: "Data: [2,4,4,6,8] → Mean=4.8, Median=4, Mode=4",
        formula: "Mean = Σxᵢ / n"
      },
      {
        id: "t12-s2", title: "Variance & Standard Deviation",
        description: "Measure of spread/dispersion. SD is the square root of variance.",
        example: "Low SD → data clustered near mean | High SD → data spread out",
        formula: "σ² = Σ(xᵢ-μ)² / n | σ = √σ²"
      },
      {
        id: "t12-s3", title: "Confidence Intervals",
        description: "Range of values that likely contains the true population parameter.",
        example: "95% CI: [48.5, 51.5] means we're 95% confident true mean is in this range",
        formula: "CI = x̄ ± z*(σ/√n)"
      },
      {
        id: "t12-s4", title: "Hypothesis Testing",
        description: "Statistical method for making decisions using data. Tests null hypothesis H₀.",
        example: "t-test to compare means of two groups",
        formula: "p-value < α (significance level, usually 0.05) → reject H₀"
      },
    ]
  },
  {
    id: "t13", number: 13, title: "Probability Distributions", phase: 3, phaseName: "Statistics & Probability",
    why: "ML models are built on probability distributions — essential for generative AI and Bayesian methods.",
    subtopics: [
      {
        id: "t13-s1", title: "Binomial Distribution",
        description: "Models number of successes in n independent trials with probability p of success.",
        example: "P(exactly 3 heads in 10 coin flips)",
        formula: "P(X=k) = C(n,k) · pᵏ · (1-p)ⁿ⁻ᵏ"
      },
      {
        id: "t13-s2", title: "Poisson Distribution",
        description: "Models count of rare events occurring in a fixed interval of time or space.",
        example: "Number of server requests per second, network packet arrivals",
        formula: "P(X=k) = (λᵏ e⁻λ) / k! | Mean = Variance = λ"
      },
      {
        id: "t13-s3", title: "Normal Distribution",
        description: "Bell-shaped, symmetric distribution. Most natural phenomena follow this.",
        example: "68% data within 1σ, 95% within 2σ, 99.7% within 3σ",
        formula: "f(x) = (1/σ√2π) · e^[-(x-μ)²/2σ²]"
      },
      {
        id: "t13-s4", title: "Exponential Distribution",
        description: "Models time between events in a Poisson process.",
        example: "Time until next server failure, time between network packets",
        formula: "f(x) = λe^(-λx) | Mean = 1/λ"
      },
    ]
  },
  {
    id: "t14", number: 14, title: "Regression & Statistical Learning", phase: 3, phaseName: "Statistics & Probability",
    why: "The gateway into machine learning — regression is used in every data-driven system.",
    subtopics: [
      {
        id: "t14-s1", title: "Linear Regression",
        description: "Models relationship between continuous output and input features.",
        example: "Predicting house price from size: Price = 200·size + 50000",
        formula: "ŷ = β₀ + β₁x | Minimize: MSE = (1/n)Σ(yᵢ - ŷᵢ)²"
      },
      {
        id: "t14-s2", title: "Logistic Regression",
        description: "Classification algorithm — outputs probability of class membership.",
        example: "Spam detection: P(spam|email features)",
        formula: "P(y=1|x) = 1 / (1 + e^(-wᵀx))  [sigmoid function]"
      },
      {
        id: "t14-s3", title: "Model Evaluation & Cross Validation",
        description: "Assessing model performance and generalization using held-out data.",
        example: "k-fold CV: split data into k parts, train on k-1, test on 1, repeat k times",
        formula: "Accuracy = TP+TN / (TP+TN+FP+FN) | F1 = 2·Precision·Recall/(Precision+Recall)"
      },
    ]
  },
  {
    id: "t15", number: 15, title: "Bayesian Statistics", phase: 3, phaseName: "Statistics & Probability",
    why: "Powers probabilistic AI, threat intelligence systems, and spam/intrusion detection.",
    subtopics: [
      {
        id: "t15-s1", title: "Prior & Posterior",
        description: "Prior: belief before seeing data. Posterior: updated belief after seeing data.",
        example: "Prior: P(rain)=0.3 | After seeing clouds, Posterior: P(rain|clouds)=0.7",
        formula: "Posterior ∝ Likelihood × Prior"
      },
      {
        id: "t15-s2", title: "Bayesian Inference",
        description: "Process of updating probability estimates as more evidence becomes available.",
        example: "Email spam filter updating spam probability as more emails are observed",
        formula: "P(θ|data) = P(data|θ)·P(θ) / P(data)"
      },
      {
        id: "t15-s3", title: "Bayesian Networks",
        description: "Directed acyclic graphs where nodes are random variables and edges are dependencies.",
        example: "Disease diagnosis network: symptoms → diseases → lab results",
        formula: "Joint probability: P(X₁,...,Xₙ) = ∏ P(Xᵢ | parents(Xᵢ))"
      },
    ]
  },
  {
    id: "t16", number: 16, title: "Time Series & Stochastic Processes", phase: 3, phaseName: "Statistics & Probability",
    why: "Network traffic analysis, anomaly detection in cybersecurity, and financial predictions.",
    subtopics: [
      {
        id: "t16-s1", title: "Markov Chains",
        description: "Systems where future state depends only on current state, not history.",
        example: "Weather model: P(tomorrow's weather | today's weather)",
        formula: "P(Xₙ₊₁=j | X₀,...,Xₙ=i) = P(Xₙ₊₁=j | Xₙ=i) = Pᵢⱼ"
      },
      {
        id: "t16-s2", title: "Hidden Markov Models",
        description: "Markov chain where states are hidden, only observations are visible.",
        example: "Speech recognition: hidden phonemes, observed acoustic signals",
        formula: "Viterbi algorithm finds most likely state sequence"
      },
      {
        id: "t16-s3", title: "ARIMA & Forecasting",
        description: "AutoRegressive Integrated Moving Average for time series forecasting.",
        example: "Predicting network load for the next hour",
        formula: "ARIMA(p,d,q): p=AR order, d=differencing, q=MA order"
      },
    ]
  },
  // ─── PHASE 4 ─────────────────────────────────────────────────────────
  {
    id: "t17", number: 17, title: "Logic", phase: 4, phaseName: "Computer Science Mathematics",
    why: "Foundation of algorithm correctness proofs, hardware design, and formal verification.",
    subtopics: [
      {
        id: "t17-s1", title: "Propositional Logic",
        description: "Logic using propositions (true/false statements) combined with connectives.",
        example: "P='it rains', Q='ground is wet'. P→Q: if it rains then ground is wet",
        formula: "AND: P∧Q | OR: P∨Q | NOT: ¬P | IMPLIES: P→Q ≡ ¬P∨Q"
      },
      {
        id: "t17-s2", title: "Predicate Logic",
        description: "Extends propositional logic with quantifiers (∀, ∃) and predicates.",
        example: "∀x: Prime(x) ∧ x>2 → Odd(x) = 'all primes greater than 2 are odd'",
        formula: "∀x P(x): P holds for all x | ∃x P(x): P holds for some x"
      },
      {
        id: "t17-s3", title: "Proof Techniques",
        description: "Methods for rigorously establishing truth: direct proof, contradiction, induction.",
        example: "Prove √2 is irrational by contradiction",
        formula: "Strong Induction: prove P(1), assume P(1)...P(k), prove P(k+1)"
      },
    ]
  },
  {
    id: "t18", number: 18, title: "Set Theory", phase: 4, phaseName: "Computer Science Mathematics",
    why: "Foundation of all computer science — databases, type systems, and formal languages.",
    subtopics: [
      {
        id: "t18-s1", title: "Sets & Operations",
        description: "Collections of distinct objects. Operations: union, intersection, complement, difference.",
        example: "A={1,2,3}, B={2,3,4} → A∪B={1,2,3,4} | A∩B={2,3}",
        formula: "De Morgan: (A∪B)ᶜ = Aᶜ∩Bᶜ | (A∩B)ᶜ = Aᶜ∪Bᶜ"
      },
      {
        id: "t18-s2", title: "Relations & Functions",
        description: "Relations describe connections between sets. Functions are special relations.",
        example: "≤ is a relation on integers | f:ℝ→ℝ, f(x)=x² is a function",
        formula: "Equivalence relation: reflexive + symmetric + transitive"
      },
      {
        id: "t18-s3", title: "Cardinality",
        description: "Size of a set. Infinite sets can have different 'sizes' (countable vs uncountable).",
        example: "ℕ and ℤ have same cardinality | ℝ has larger cardinality than ℕ",
        formula: "Cantor's diagonal argument proves |ℝ| > |ℕ|"
      },
    ]
  },
  {
    id: "t19", number: 19, title: "Combinatorics", phase: 4, phaseName: "Computer Science Mathematics",
    why: "Algorithm analysis (time complexity), counting security vulnerabilities, and probability.",
    subtopics: [
      {
        id: "t19-s1", title: "Counting Principles",
        description: "Multiplication rule: if task A has m ways and B has n ways, together: m×n ways.",
        example: "3 shirts × 4 pants = 12 outfits | 26×26×10=6760 license plates",
        formula: "Addition rule: A OR B (mutually exclusive) = |A| + |B|"
      },
      {
        id: "t19-s2", title: "Permutations",
        description: "Ordered arrangements. P(n,r) = number of ways to arrange r items from n.",
        example: "Arrange 3 of 5 books: P(5,3) = 5!/2! = 60",
        formula: "P(n,r) = n! / (n-r)! | n! permutations of n distinct objects"
      },
      {
        id: "t19-s3", title: "Combinations",
        description: "Unordered selections. C(n,r) = number of ways to choose r items from n.",
        example: "Choose 3 from 5: C(5,3) = 10",
        formula: "C(n,r) = n! / (r!(n-r)!) = 'n choose r'"
      },
      {
        id: "t19-s4", title: "Inclusion-Exclusion",
        description: "Counts elements in union of sets by adding individual sets and subtracting overlaps.",
        example: "|A∪B| = |A|+|B|-|A∩B| | Students in Math or CS",
        formula: "|A∪B∪C| = |A|+|B|+|C|-|A∩B|-|A∩C|-|B∩C|+|A∩B∩C|"
      },
    ]
  },
  {
    id: "t20", number: 20, title: "Graph Theory", phase: 4, phaseName: "Computer Science Mathematics",
    why: "Social networks, internet routing, cybersecurity attack graphs, and DSA algorithms.",
    subtopics: [
      {
        id: "t20-s1", title: "Graphs & Trees",
        description: "Graphs G=(V,E) with vertices and edges. Trees are connected acyclic graphs.",
        example: "Internet topology, social networks, file system directory trees",
        formula: "Handshaking: Σdeg(v) = 2|E| | Tree: |V| = |E|+1"
      },
      {
        id: "t20-s2", title: "Network Flows",
        description: "Modeling flow through a network (capacity on edges). Max-flow min-cut theorem.",
        example: "Maximum data throughput in a network, matching in bipartite graphs",
        formula: "Max-Flow = Min-Cut (Ford-Fulkerson theorem)"
      },
      {
        id: "t20-s3", title: "Shortest Paths",
        description: "Find minimum weight path between vertices. Dijkstra's, Bellman-Ford, Floyd-Warshall.",
        example: "GPS navigation, network routing protocols (OSPF)",
        formula: "Dijkstra: O(V² or (V+E)logV) | Bellman-Ford: O(VE)"
      },
    ]
  },
  {
    id: "t21", number: 21, title: "Number Theory", phase: 4, phaseName: "Computer Science Mathematics",
    why: "The mathematical backbone of RSA, AES, elliptic curve cryptography, and blockchain.",
    subtopics: [
      {
        id: "t21-s1", title: "Modular Arithmetic",
        description: "Arithmetic with remainders. 'Clock arithmetic' — numbers wrap around at modulus.",
        example: "17 mod 5 = 2 | (3+4) mod 5 = 2 | RSA uses modular exponentiation",
        formula: "a ≡ b (mod n) ⟺ n | (a-b) | (a+b) mod n = (a mod n + b mod n) mod n"
      },
      {
        id: "t21-s2", title: "Prime Numbers",
        description: "Numbers divisible only by 1 and themselves. Infinite primes. Core of cryptography.",
        example: "RSA: n = p×q where p,q are huge primes. Hard to factor n back to p and q.",
        formula: "Sieve of Eratosthenes | Fermat's little theorem: aᵖ ≡ a (mod p) for prime p"
      },
      {
        id: "t21-s3", title: "Euler's Theorem & CRT",
        description: "Euler: aᵠ⁽ⁿ⁾ ≡ 1 (mod n) for gcd(a,n)=1. CRT: system of modular equations.",
        example: "RSA encryption uses Euler's totient | CRT speeds up RSA decryption",
        formula: "Euler: aᵠ⁽ⁿ⁾ ≡ 1 (mod n) | CRT: x ≡ aᵢ (mod nᵢ) has unique solution mod ∏nᵢ"
      },
    ]
  },
  {
    id: "t22", number: 22, title: "Abstract Algebra", phase: 4, phaseName: "Computer Science Mathematics",
    why: "Galois fields power AES encryption, BCH error codes, and elliptic curve cryptography.",
    subtopics: [
      {
        id: "t22-s1", title: "Groups",
        description: "Set + binary operation satisfying closure, associativity, identity, inverses.",
        example: "Integers under addition: (ℤ, +) | Symmetries of a square form a group",
        formula: "Group axioms: (ab)c=a(bc) | e·a=a·e=a | a·a⁻¹=e"
      },
      {
        id: "t22-s2", title: "Rings & Fields",
        description: "Ring: group under addition with multiplication. Field: ring where division works.",
        example: "Integers (ℤ,+,×) form a ring | Rationals (ℚ,+,×) form a field",
        formula: "Field has multiplicative inverses for all non-zero elements"
      },
      {
        id: "t22-s3", title: "Finite Fields (Galois Fields)",
        description: "Fields with a finite number of elements. GF(2⁸) used in AES encryption.",
        example: "GF(2) = {0,1} with XOR addition | GF(2⁸) has 256 elements",
        formula: "GF(pⁿ) exists for every prime p and positive integer n"
      },
    ]
  },
  // ─── PHASE 5 ─────────────────────────────────────────────────────────
  {
    id: "t23", number: 23, title: "Differential Equations", phase: 5, phaseName: "Engineering Mathematics",
    why: "Models physical systems — circuits (RLC), mechanical vibrations, control systems.",
    subtopics: [
      {
        id: "t23-s1", title: "First Order ODEs",
        description: "Equations relating a function and its first derivative.",
        example: "dy/dx = ky → y = Ce^(kx) | Population growth / radioactive decay",
        formula: "Separable: dy/dx = f(x)g(y) | Integrating factor for linear: y'+P(x)y=Q(x)"
      },
      {
        id: "t23-s2", title: "Second Order ODEs",
        description: "Equations involving second derivatives. Models oscillatory systems.",
        example: "y'' + 2ζωy' + ω²y = 0 (damped oscillator — RLC circuit, spring-mass)",
        formula: "Characteristic equation: ar²+br+c=0 | Solution depends on discriminant"
      },
      {
        id: "t23-s3", title: "Systems of ODEs",
        description: "Multiple coupled differential equations. Solved using linear algebra (eigenvalues).",
        example: "Predator-prey model, coupled circuit equations",
        formula: "x' = Ax | x(t) = e^(At)x₀"
      },
    ]
  },
  {
    id: "t24", number: 24, title: "Partial Differential Equations", phase: 5, phaseName: "Engineering Mathematics",
    why: "Governs heat diffusion, electromagnetic waves, and acoustic signal propagation.",
    subtopics: [
      {
        id: "t24-s1", title: "Heat Equation",
        description: "Models diffusion of heat (or any quantity) through a medium over time.",
        example: "Temperature distribution in a CPU heat sink",
        formula: "∂u/∂t = α ∇²u"
      },
      {
        id: "t24-s2", title: "Wave Equation",
        description: "Models propagation of waves (sound, light, strings, seismic).",
        example: "Vibrating string, electromagnetic wave propagation",
        formula: "∂²u/∂t² = c² ∇²u"
      },
      {
        id: "t24-s3", title: "Laplace Equation",
        description: "Steady-state version of heat equation. Models static electric/gravitational fields.",
        example: "Electric potential in a charge-free region, fluid flow",
        formula: "∇²u = 0"
      },
    ]
  },
  {
    id: "t25", number: 25, title: "Numerical Methods", phase: 5, phaseName: "Engineering Mathematics",
    why: "When equations can't be solved analytically, computers use numerical approximations.",
    subtopics: [
      {
        id: "t25-s1", title: "Newton-Raphson Method",
        description: "Iterative root-finding algorithm. Fast convergence (quadratic) near the root.",
        example: "Find √2: xₙ₊₁ = (xₙ + 2/xₙ)/2, converges to 1.4142...",
        formula: "xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)"
      },
      {
        id: "t25-s2", title: "Numerical Integration",
        description: "Approximate definite integrals when analytical solution is not possible.",
        example: "Trapezoidal rule, Simpson's rule, Gaussian quadrature",
        formula: "Trapezoidal: ∫ₐᵇ f(x)dx ≈ (b-a)/2 · [f(a)+f(b)]"
      },
      {
        id: "t25-s3", title: "Interpolation & Error Analysis",
        description: "Estimate values between known data points. Analyze approximation errors.",
        example: "Lagrange interpolation, cubic splines for smooth curves",
        formula: "Lagrange: L(x) = Σ yᵢ ∏(x-xⱼ)/(xᵢ-xⱼ)"
      },
    ]
  },
  {
    id: "t26", number: 26, title: "Vector Calculus", phase: 5, phaseName: "Engineering Mathematics",
    why: "Essential for electromagnetics (Maxwell's equations), fluid dynamics, and robotics.",
    subtopics: [
      {
        id: "t26-s1", title: "Gradient, Divergence, Curl",
        description: "Gradient: direction of steepest ascent. Divergence: source/sink of field. Curl: rotation.",
        example: "∇f points toward function maximum | Gradient descent in ML goes opposite to ∇f",
        formula: "∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z) | div F = ∇·F | curl F = ∇×F"
      },
      {
        id: "t26-s2", title: "Surface & Line Integrals",
        description: "Integrate functions or vector fields over curves or surfaces in 3D.",
        example: "Work done by force field along a path",
        formula: "Stokes: ∬(∇×F)·dS = ∮F·dr | Divergence theorem: ∯F·dS = ∭(∇·F)dV"
      },
    ]
  },
  {
    id: "t27", number: 27, title: "Complex Analysis", phase: 5, phaseName: "Engineering Mathematics",
    why: "Signal processing (Z-transform), control theory (Nyquist plot), and communication systems.",
    subtopics: [
      {
        id: "t27-s1", title: "Complex Functions",
        description: "Functions of complex variable z = x+iy. Analytic functions obey Cauchy-Riemann equations.",
        example: "f(z) = z² = (x²-y²) + i(2xy)",
        formula: "Euler: e^(iθ) = cos θ + i sin θ | e^(iπ) + 1 = 0"
      },
      {
        id: "t27-s2", title: "Residues & Contour Integration",
        description: "Powerful technique for evaluating real integrals using complex path integrals.",
        example: "Evaluate ∫₋∞^∞ 1/(1+x²) dx = π using residue theorem",
        formula: "Residue theorem: ∮f(z)dz = 2πi Σ Res(f, zₖ)"
      },
    ]
  },
  // ─── PHASE 6 ─────────────────────────────────────────────────────────
  {
    id: "t28", number: 28, title: "Information Theory", phase: 6, phaseName: "Signals, Control & Information",
    why: "Quantifies information in data — fundamental to compression, cryptography, and ML.",
    subtopics: [
      {
        id: "t28-s1", title: "Entropy",
        description: "Measures uncertainty or information content in a probability distribution.",
        example: "Fair coin: H = 1 bit. Biased coin (always heads): H = 0 bits",
        formula: "H(X) = -Σ P(xᵢ) log₂ P(xᵢ)"
      },
      {
        id: "t28-s2", title: "Mutual Information",
        description: "Measures how much knowing one variable reduces uncertainty about another.",
        example: "High MI between features and label → feature is useful for ML",
        formula: "I(X;Y) = H(X) - H(X|Y) = H(Y) - H(Y|X)"
      },
      {
        id: "t28-s3", title: "Coding Theory",
        description: "Efficient representation and transmission of data. Error detection/correction.",
        example: "Huffman coding (compression) | Hamming codes (error correction)",
        formula: "Shannon's capacity: C = B·log₂(1 + S/N)"
      },
    ]
  },
  {
    id: "t29", number: 29, title: "Signal Processing Mathematics", phase: 6, phaseName: "Signals, Control & Information",
    why: "Transforms are the core tools in DSP, communications, audio, radar, and embedded systems.",
    subtopics: [
      {
        id: "t29-s1", title: "Fourier Series",
        description: "Represent periodic functions as sums of sines and cosines.",
        example: "Square wave decomposed into fundamental + harmonics",
        formula: "f(x) = a₀/2 + Σ[aₙcos(nx) + bₙsin(nx)]"
      },
      {
        id: "t29-s2", title: "Fourier Transform",
        description: "Converts a signal from time domain to frequency domain.",
        example: "Audio equalizer: boost bass (low freq) or treble (high freq)",
        formula: "F(ω) = ∫₋∞^∞ f(t)e^(-iωt) dt"
      },
      {
        id: "t29-s3", title: "Laplace Transform",
        description: "Generalizes Fourier transform. Solves ODEs by converting to algebraic equations.",
        example: "L{y'(t)} = sY(s)-y(0) converts ODE to polynomial in s",
        formula: "L{f(t)} = F(s) = ∫₀^∞ f(t)e^(-st) dt"
      },
      {
        id: "t29-s4", title: "Z-Transform",
        description: "Discrete-time equivalent of Laplace transform for digital signal processing.",
        example: "FIR and IIR digital filter design",
        formula: "X(z) = Σ x[n] z^(-n)"
      },
    ]
  },
  {
    id: "t30", number: 30, title: "Control Theory", phase: 6, phaseName: "Signals, Control & Information",
    why: "Robotics motor control, embedded systems regulation, and autonomous vehicle steering.",
    subtopics: [
      {
        id: "t30-s1", title: "Transfer Functions",
        description: "Laplace domain ratio of output to input for a linear system.",
        example: "H(s) = 1/(s+1) — first-order low-pass filter",
        formula: "H(s) = Y(s)/X(s) | Poles where H(s)→∞, zeros where H(s)=0"
      },
      {
        id: "t30-s2", title: "State Space Models",
        description: "Matrix representation of dynamic systems. More general than transfer functions.",
        example: "Drone attitude control using state-space representation",
        formula: "ẋ = Ax + Bu | y = Cx + Du"
      },
      {
        id: "t30-s3", title: "Stability Analysis",
        description: "Determine if a system's output stays bounded. Lyapunov, Bode, Nyquist methods.",
        example: "PID controller tuning for stable robot arm control",
        formula: "Stable ⟺ all poles have negative real parts (in s-domain)"
      },
    ]
  },
  {
    id: "t31", number: 31, title: "Optimization", phase: 6, phaseName: "Signals, Control & Information",
    why: "Training AI models, resource allocation, path planning in robotics, and scheduling.",
    subtopics: [
      {
        id: "t31-s1", title: "Linear Programming",
        description: "Optimize linear objective subject to linear constraints.",
        example: "Maximize profit given resource constraints",
        formula: "Simplex method | max cᵀx subject to Ax ≤ b, x ≥ 0"
      },
      {
        id: "t31-s2", title: "Convex Optimization",
        description: "Optimize convex functions over convex sets. Any local minimum is global minimum.",
        example: "SVM training, portfolio optimization, LASSO regression",
        formula: "KKT conditions | Duality: weak duality always holds, strong duality under Slater's condition"
      },
      {
        id: "t31-s3", title: "Gradient Descent",
        description: "Iterative algorithm moving opposite to gradient to find minimum.",
        example: "Neural network weight updates during backpropagation",
        formula: "θₙ₊₁ = θₙ - α∇J(θ) | Adam optimizer adapts learning rate α"
      },
    ]
  },
  // ─── PHASE 7 ─────────────────────────────────────────────────────────
  {
    id: "t32", number: 32, title: "Mathematical Physics", phase: 7, phaseName: "Physics Mathematics",
    why: "Unifies mathematics and physics — needed for advanced electronics and robotics.",
    subtopics: [
      { id: "t32-s1", title: "Classical Mechanics Math", description: "Lagrangian and Hamiltonian mechanics — elegant reformulations of Newton's laws.", example: "Generalized coordinates for robotic arm joints", formula: "Euler-Lagrange: d/dt(∂L/∂q̇) - ∂L/∂q = 0" },
      { id: "t32-s2", title: "Electromagnetic Mathematics", description: "Maxwell's equations in differential form using vector calculus.", example: "Electric field from charge distribution", formula: "∇·E = ρ/ε₀ | ∇×B = μ₀J + μ₀ε₀∂E/∂t" },
      { id: "t32-s3", title: "Wave Mathematics", description: "Mathematical treatment of wave phenomena — superposition, interference, diffraction.", example: "Standing waves on a string, optical interference", formula: "Superposition: ψ = ψ₁ + ψ₂" },
    ]
  },
  {
    id: "t33", number: 33, title: "Tensor Calculus", phase: 7, phaseName: "Physics Mathematics",
    why: "Advanced robotics (rotation matrices), general relativity, and deep learning tensors.",
    subtopics: [
      { id: "t33-s1", title: "Tensors & Operations", description: "Geometric objects generalizing scalars (rank 0), vectors (rank 1), matrices (rank 2).", example: "Stress tensor in mechanics, metric tensor in GR", formula: "Tᵢⱼ = AᵢₖBₖⱼ (contraction)" },
      { id: "t33-s2", title: "Coordinate Transformations", description: "How tensor components change under coordinate system changes.", example: "Rotation matrix transforms vector components", formula: "T'ᵢⱼ = ΛᵢₖΛⱼₗTₖₗ" },
    ]
  },
  {
    id: "t34", number: 34, title: "Statistical Mechanics", phase: 7, phaseName: "Physics Mathematics",
    why: "Bridges macroscopic thermodynamics with microscopic quantum behavior.",
    subtopics: [
      { id: "t34-s1", title: "Microstates & Entropy", description: "Entropy measures the number of possible microstates of a system.", example: "Gas molecules in a box — which distributions are most likely?", formula: "S = k_B ln(Ω)" },
      { id: "t34-s2", title: "Partition Functions", description: "Fundamental quantity that encodes all thermodynamic properties.", example: "Z = Σ e^(-βEᵢ) over all microstates", formula: "F = -k_BT ln Z | ⟨E⟩ = -∂ln Z/∂β" },
    ]
  },
  {
    id: "t35", number: 35, title: "Quantum Mathematics", phase: 7, phaseName: "Physics Mathematics",
    why: "Foundation of quantum computing — the future of cryptography and AI acceleration.",
    subtopics: [
      { id: "t35-s1", title: "Hilbert Spaces", description: "Complete inner product spaces. Quantum states live in Hilbert spaces.", example: "Qubit state: |ψ⟩ = α|0⟩ + β|1⟩ with |α|²+|β|²=1", formula: "⟨ψ|φ⟩ inner product | ‖ψ‖² = ⟨ψ|ψ⟩ = 1" },
      { id: "t35-s2", title: "Operators & Quantum States", description: "Observables are Hermitian operators. Measurement collapses quantum state.", example: "Pauli matrices σₓ,σᵧ,σᵤ as qubit operators", formula: "Schrödinger: iℏ∂|ψ⟩/∂t = Ĥ|ψ⟩" },
    ]
  },
  // ─── PHASE 8 ─────────────────────────────────────────────────────────
  {
    id: "t36", number: 36, title: "Real Analysis", phase: 8, phaseName: "Advanced Mathematics",
    why: "Rigorous foundation for calculus — ensures AI algorithms are mathematically sound.",
    subtopics: [
      { id: "t36-s1", title: "Rigorous Calculus", description: "Epsilon-delta proofs of limits, derivatives, integrals.", example: "Prove that lim(x→0) x·sin(1/x) = 0", formula: "ε-δ: ∀ε>0 ∃δ>0: |x-a|<δ ⟹ |f(x)-L|<ε" },
      { id: "t36-s2", title: "Convergence & Continuity", description: "Uniform convergence, equicontinuity, compactness in function spaces.", example: "Weierstrass M-test for uniform convergence of series", formula: "Uniform: ∀ε>0 ∃N: n>N ⟹ |fₙ(x)-f(x)|<ε ∀x" },
    ]
  },
  {
    id: "t37", number: 37, title: "Measure Theory", phase: 8, phaseName: "Advanced Mathematics",
    why: "Provides rigorous foundations for probability theory and Lebesgue integration in ML.",
    subtopics: [
      { id: "t37-s1", title: "Measures & σ-algebras", description: "Measure generalizes length, area, volume to abstract spaces.", example: "Lebesgue measure on ℝ | probability measure P(Ω)=1", formula: "σ-algebra: closed under complement and countable union" },
      { id: "t37-s2", title: "Lebesgue Integration", description: "More powerful integration than Riemann's. Handles discontinuous functions.", example: "Dirichlet function: Lebesgue integral = 0, Riemann integral undefined", formula: "∫f dμ = lim ∫φₙ dμ for simple functions φₙ↗f" },
    ]
  },
  {
    id: "t38", number: 38, title: "Functional Analysis", phase: 8, phaseName: "Advanced Mathematics",
    why: "Mathematical framework for quantum mechanics, PDEs, and ML kernel methods.",
    subtopics: [
      { id: "t38-s1", title: "Banach & Hilbert Spaces", description: "Complete normed (Banach) and inner product (Hilbert) vector spaces.", example: "L² space of square-integrable functions — quantum states live here", formula: "Cauchy-Schwarz: |⟨u,v⟩| ≤ ‖u‖·‖v‖" },
      { id: "t38-s2", title: "Linear Operators", description: "Bounded operators on infinite-dimensional spaces — generalize matrices.", example: "Differential operator D = d/dx | Integral operators in ML kernels", formula: "Spectral theorem for compact self-adjoint operators" },
    ]
  },
  {
    id: "t39", number: 39, title: "Topology", phase: 8, phaseName: "Advanced Mathematics",
    why: "Understanding data shape — topological data analysis for high-dimensional ML data.",
    subtopics: [
      { id: "t39-s1", title: "Open Sets & Continuity", description: "Topology studies properties preserved under continuous deformations.", example: "Coffee cup and donut are topologically equivalent (both have one hole)", formula: "f continuous ⟺ preimage of every open set is open" },
      { id: "t39-s2", title: "Compactness & Connectedness", description: "Compactness generalizes closed and bounded. Connectedness: can't split into open parts.", example: "Extreme value theorem requires compact domain", formula: "Compact in ℝⁿ ⟺ closed and bounded (Heine-Borel)" },
    ]
  },
  { id: "t40", number: 40, title: "Differential Geometry", phase: 8, phaseName: "Advanced Mathematics", why: "Robotics motion planning on manifolds, computer vision, and general relativity.", subtopics: [{ id: "t40-s1", title: "Curves & Surfaces", description: "Study of geometric objects using calculus.", example: "Gaussian curvature of a sphere vs flat plane", formula: "Gauss-Bonnet: ∫∫K dA + ∮k_g ds = 2πχ" }] },
  { id: "t41", number: 41, title: "Riemannian Geometry", phase: 8, phaseName: "Advanced Mathematics", why: "General relativity, advanced robotics, and geometric deep learning.", subtopics: [{ id: "t41-s1", title: "Metrics & Curvature", description: "Riemannian metric defines distances on curved spaces (manifolds).", example: "GPS must account for spacetime curvature", formula: "ds² = gᵢⱼ dxⁱ dxʲ" }] },
  { id: "t42", number: 42, title: "Algebraic Topology", phase: 8, phaseName: "Advanced Mathematics", why: "Topological data analysis (TDA) for ML and persistent homology.", subtopics: [{ id: "t42-s1", title: "Homotopy & Homology", description: "Count holes of different dimensions in topological spaces.", example: "Sphere: no 1-holes (loops), one 2-hole (surface). Torus: one of each.", formula: "Euler characteristic: χ = V-E+F" }] },
  { id: "t43", number: 43, title: "Algebraic Geometry", phase: 8, phaseName: "Advanced Mathematics", why: "Advanced cryptography (elliptic curves) and string theory.", subtopics: [{ id: "t43-s1", title: "Varieties & Schemes", description: "Solution sets of polynomial equations studied algebraically.", example: "Elliptic curve: y² = x³ + ax + b used in ECC cryptography", formula: "Point addition on elliptic curves forms an abelian group" }] },
  { id: "t44", number: 44, title: "Lie Groups & Lie Algebras", phase: 8, phaseName: "Advanced Mathematics", why: "Continuous symmetries in robotics (SO(3), SE(3)), particle physics, deep learning.", subtopics: [{ id: "t44-s1", title: "Continuous Symmetries", description: "Groups that are also smooth manifolds. Describe continuous symmetries.", example: "SO(3): rotation group of 3D space — robot joint orientations", formula: "Lie bracket: [X,Y] = XY - YX" }] },
  { id: "t45", number: 45, title: "Category Theory", phase: 8, phaseName: "Advanced Mathematics", why: "Universal language of mathematics — type theory, functional programming, ML compositionally.", subtopics: [{ id: "t45-s1", title: "Functors & Natural Transformations", description: "Categories, morphisms, functors preserving structure. Abstracts all of math.", example: "Haskell Functor typeclass | composition of ML pipelines", formula: "Functor F: C→D preserves id and composition" }] },
  // ─── PHASE 9 ─────────────────────────────────────────────────────────
  { id: "t46", number: 46, title: "Dynamical Systems", phase: 9, phaseName: "Research-Level Topics", why: "Study of systems evolving over time — chaos, attractors, robot behavior.", subtopics: [{ id: "t46-s1", title: "Attractors & Stability", description: "Long-term behavior of dynamical systems.", example: "Lorenz strange attractor — sensitive dependence on initial conditions", formula: "ẋ = f(x) | Fixed points: f(x*)=0" }] },
  { id: "t47", number: 47, title: "Chaos Theory", phase: 9, phaseName: "Research-Level Topics", why: "Understanding unpredictability in complex systems — weather, markets, networks.", subtopics: [{ id: "t47-s1", title: "Sensitive Dependence", description: "Small changes in initial conditions lead to vastly different outcomes.", example: "Butterfly effect | Lyapunov exponents measure chaos", formula: "Logistic map: xₙ₊₁ = rxₙ(1-xₙ)" }] },
  { id: "t48", number: 48, title: "Game Theory", phase: 9, phaseName: "Research-Level Topics", why: "Multi-agent AI systems, cybersecurity adversarial modeling, economics.", subtopics: [{ id: "t48-s1", title: "Nash Equilibrium", description: "Stable strategy profiles in strategic interactions.", example: "Prisoner's dilemma | Cybersecurity attack/defense modeling", formula: "Nash: no player can improve payoff by unilateral deviation" }] },
  { id: "t49", number: 49, title: "Operations Research", phase: 9, phaseName: "Research-Level Topics", why: "Supply chain optimization, scheduling, network optimization in large systems.", subtopics: [{ id: "t49-s1", title: "Integer & Combinatorial Optimization", description: "Optimization where variables must be integers or binary.", example: "Traveling salesman problem, resource scheduling", formula: "Branch and bound | Dynamic programming" }] },
  { id: "t50", number: 50, title: "Cryptographic Mathematics", phase: 9, phaseName: "Research-Level Topics", why: "Advanced cryptography — post-quantum cryptography, zero-knowledge proofs.", subtopics: [{ id: "t50-s1", title: "Post-Quantum Cryptography", description: "Cryptosystems resistant to quantum computer attacks.", example: "Lattice-based (CRYSTALS-Kyber), hash-based, code-based schemes", formula: "Shortest Vector Problem (SVP) is NP-hard — basis of lattice crypto" }] },
  { id: "t51", number: 51, title: "Machine Learning Mathematics", phase: 9, phaseName: "Research-Level Topics", why: "Deep mathematical foundations of modern AI — transformers, diffusion models.", subtopics: [{ id: "t51-s1", title: "Deep Learning Theory", description: "Universal approximation, generalization bounds, PAC learning.", example: "Why transformers work: attention as kernel regression", formula: "VC dimension bounds: ε ≥ √(d·log(n)/n)" }] },
  { id: "t52", number: 52, title: "Advanced Bayesian Methods", phase: 9, phaseName: "Research-Level Topics", why: "Probabilistic deep learning, uncertainty quantification, Gaussian processes.", subtopics: [{ id: "t52-s1", title: "Gaussian Processes & MCMC", description: "Non-parametric Bayesian models and sampling methods.", example: "Gaussian process regression for uncertainty-aware predictions", formula: "GP: f ~ GP(μ, k) where k is covariance kernel" }] },
  { id: "t53", number: 53, title: "Information Geometry", phase: 9, phaseName: "Research-Level Topics", why: "Statistical manifolds — natural gradient descent for faster AI training.", subtopics: [{ id: "t53-s1", title: "Statistical Manifolds", description: "Probability distributions as points on a Riemannian manifold.", example: "Fisher information metric | Natural gradient in ML", formula: "Fisher: I(θ) = E[(∂log p/∂θ)²]" }] },
  { id: "t54", number: 54, title: "Mathematical Logic", phase: 9, phaseName: "Research-Level Topics", why: "Formal verification of software and hardware systems.", subtopics: [{ id: "t54-s1", title: "Gödel's Theorems", description: "Incompleteness theorems: fundamental limits of formal systems.", example: "No consistent system can prove its own consistency", formula: "Gödel numbering encodes statements as natural numbers" }] },
  { id: "t55", number: 55, title: "Advanced Set Theory", phase: 9, phaseName: "Research-Level Topics", why: "Foundations of mathematics and theoretical computer science.", subtopics: [{ id: "t55-s1", title: "Forcing & Large Cardinals", description: "Independence results — statements neither provable nor disprovable from ZFC.", example: "Continuum hypothesis is independent of ZFC", formula: "Forcing: extend model M to M[G] with generic filter G" }] },
  { id: "t56", number: 56, title: "Noncommutative Geometry", phase: 9, phaseName: "Research-Level Topics", why: "Quantum physics mathematical framework and advanced algebra.", subtopics: [{ id: "t56-s1", title: "Operator Algebras", description: "Geometry where coordinates don't commute — models quantum spaces.", example: "C*-algebras generalizing topological spaces", formula: "xy ≠ yx (noncommutativity)" }] },
  { id: "t57", number: 57, title: "Arithmetic Geometry", phase: 9, phaseName: "Research-Level Topics", why: "Deepest connections between number theory and geometry — Wiles proved Fermat's Last Theorem here.", subtopics: [{ id: "t57-s1", title: "Modular Forms & L-functions", description: "Study of number-theoretic objects using geometric tools.", example: "Fermat's Last Theorem proven via elliptic curves and modular forms", formula: "Modularity theorem: every elliptic curve over ℚ is modular" }] },
  // ─── PHASE 4 ADDITION ────────────────────────────────────────────────
  {
    id: "t58", number: 58, title: "Boolean Algebra", phase: 4, phaseName: "Computer Science Mathematics",
    why: "The mathematical foundation of digital logic — every CPU, circuit, and bitwise operation in computing runs on Boolean algebra.",
    subtopics: [
      {
        id: "t58-s1", title: "Boolean Operations & Laws",
        description: "Algebra over {0,1} using AND, OR, NOT, XOR. Governed by identity, commutative, associative, distributive, and De Morgan's laws.",
        example: "A AND (B OR C) = (A AND B) OR (A AND C) | bitwise flags in permission systems",
        formula: "De Morgan: ¬(A∧B) = ¬A∨¬B | ¬(A∨B) = ¬A∧¬B"
      },
      {
        id: "t58-s2", title: "Truth Tables & Logic Gates",
        description: "Truth tables enumerate every input/output combination. Logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) are their physical/circuit realization.",
        example: "NAND gate alone can construct any other gate — basis of CPU design",
        formula: "XOR: A⊕B = (A∧¬B)∨(¬A∧B) | NAND: ¬(A∧B)"
      },
      {
        id: "t58-s3", title: "Karnaugh Maps & Simplification",
        description: "Graphical method to minimize Boolean expressions by grouping adjacent 1s, reducing gate count in circuit design.",
        example: "Simplifying a 4-variable expression from 8 terms down to 2 using a K-map",
        formula: "SOP (Sum of Products) and POS (Product of Sums) canonical forms"
      },
      {
        id: "t58-s4", title: "Combinational Logic Circuits",
        description: "Circuits built purely from Boolean expressions with no memory — outputs depend only on current inputs.",
        example: "Half adder: Sum = A⊕B, Carry = A∧B | multiplexers, decoders",
        formula: "Full adder: Sum = A⊕B⊕Cin | Cout = (A∧B)∨(Cin∧(A⊕B))"
      },
    ]
  },
  {
    id: "t59", number: 59, title: "Algorithmic Complexity", phase: 4, phaseName: "Computer Science Mathematics",
    why: "The mathematical language for comparing algorithm efficiency — the single most-used concept across DSA, system design, and technical interviews.",
    subtopics: [
      {
        id: "t59-s1", title: "Big-O, Big-Ω, Big-Θ Notation",
        description: "Asymptotic bounds describing how runtime/memory grow as input size n → ∞. O = upper bound (worst case), Ω = lower bound (best case), Θ = tight bound.",
        example: "Linear search: O(n) | Binary search: O(log n) | Bubble sort: O(n²)",
        formula: "f(n) = O(g(n)) ⟺ ∃c,n₀: f(n) ≤ c·g(n) for all n ≥ n₀"
      },
      {
        id: "t59-s2", title: "Time vs Space Complexity",
        description: "Time complexity measures operations as input grows; space complexity measures memory used, including auxiliary structures and recursion stack.",
        example: "Memoized Fibonacci: O(n) time, O(n) space vs naive recursive: O(2ⁿ) time, O(n) space",
        formula: "Total space = input space + auxiliary space"
      },
      {
        id: "t59-s3", title: "Best, Average, Worst Case Analysis",
        description: "Different input arrangements yield different runtimes — analyzing all three gives a full performance picture.",
        example: "Quicksort: best/average O(n log n), worst O(n²) on already-sorted input with poor pivot choice",
        formula: "Average case uses expected value over all input distributions"
      },
      {
        id: "t59-s4", title: "Common Complexity Classes",
        description: "Ranking of growth rates from fastest to slowest, used to compare algorithm scalability.",
        example: "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)",
        formula: "Hash table lookup O(1) vs balanced BST O(log n) vs linear scan O(n)"
      },
    ]
  },
  {
    id: "t60", number: 60, title: "Recurrence Relations", phase: 4, phaseName: "Computer Science Mathematics",
    why: "Analyzes recursive algorithms mathematically — essential for understanding divide-and-conquer methods like merge sort, quicksort, and binary search.",
    subtopics: [
      {
        id: "t60-s1", title: "Setting Up Recurrences",
        description: "Expressing a recursive algorithm's runtime as a function of itself on smaller inputs.",
        example: "Merge sort: T(n) = 2T(n/2) + O(n) — two halves plus linear merge step",
        formula: "T(n) = aT(n/b) + f(n)  [a = subproblems, b = division factor, f(n) = combine cost]"
      },
      {
        id: "t60-s2", title: "Master Theorem",
        description: "Direct formula for solving divide-and-conquer recurrences without unrolling them by hand.",
        example: "Binary search: T(n) = T(n/2) + O(1) → T(n) = O(log n)",
        formula: "Compare f(n) to n^(log_b a): 3 cases determine T(n) = Θ(n^(log_b a)), Θ(n^(log_b a) log n), or Θ(f(n))"
      },
      {
        id: "t60-s3", title: "Recursion Tree & Substitution Methods",
        description: "Alternative solving techniques: recursion trees visualize cost per level; substitution guesses then proves a solution by induction.",
        example: "Fibonacci recurrence T(n) = T(n-1) + T(n-2) + O(1) → exponential without memoization",
        formula: "Sum cost across all levels of the recursion tree to get total T(n)"
      },
    ]
  },
  {
    id: "t61", number: 61, title: "Automata Theory & Formal Languages", phase: 4, phaseName: "Computer Science Mathematics",
    why: "Theoretical foundation of computation — compilers, regex engines, and the proven limits of what algorithms can ever solve (P vs NP).",
    subtopics: [
      {
        id: "t61-s1", title: "Finite Automata & Regular Expressions",
        description: "Finite automata (DFA/NFA) are simple state machines that recognize regular languages, the class of patterns describable by regular expressions.",
        example: "Email validator regex | DFA recognizing binary strings divisible by 3",
        formula: "DFA = (Q, Σ, δ, q₀, F) — states, alphabet, transition function, start, accept states"
      },
      {
        id: "t61-s2", title: "Context-Free Grammars & Pushdown Automata",
        description: "Grammars with rules like A → αβ that generate nested/recursive structures; pushdown automata (DFA + stack) recognize them.",
        example: "Parsing balanced parentheses or programming language syntax",
        formula: "CFG rule: nonterminal → (terminals | nonterminals)*"
      },
      {
        id: "t61-s3", title: "Turing Machines & Decidability",
        description: "Turing machines formalize 'what is computable.' Decidable problems have an algorithm that always halts with an answer; undecidable ones don't.",
        example: "The Halting Problem is famously undecidable — no algorithm can determine in general if a program halts",
        formula: "Church-Turing thesis: any effectively computable function is Turing-computable"
      },
      {
        id: "t61-s4", title: "Computational Complexity Classes (P vs NP)",
        description: "Classifies decision problems by resource requirements. P = solvable in polynomial time; NP = solution verifiable in polynomial time.",
        example: "Sorting ∈ P | Traveling Salesman (decision version) ∈ NP-complete",
        formula: "P ⊆ NP ⊆ NP-hard | P = NP is the most famous open problem in CS"
      },
    ]
  },
];
