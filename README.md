# PostCeDex

- Requirement: [here](https://postco.notion.site/Take-home-assessment-JS-94ae6e6d24ec4e508fd5126665f96fd4)

## How to run the project:

1. Ensure that you have `.env` includes some Supabase variables
2. Run the command `npm install && npm run dev`
3. (Optional) Run the command `npm run storybook` to check the Storybook

## Required features:

- All pages:
  - [x] Search Pokemon by name, using GraphQL
  - [x] Debouce search
- Home page (`/`)
  - [x] Save owned Pokemons using `LocalStorage` (**deprecated**, migrated to Supabase)
- Pokemon Details page (`/pokemons/:id`)
  - [x] Display types (Fire, Water, ...)
  - [x] Display image
  - [x] Display general info (height, weight)
  - [x] Display stats
  - [x] Display moves
  
  ## What I managed to extend:
  
  - [x] Supbase integration:
    - [x] Save owned Pokemons in Supabase's database
    - [x] Log in with Google
    - [x] Log out
  - [x] UX/UI
    - [x] Responsive design (try resizing the window to see it in action :wink:)
    - [x] Using [Storybook](https://storybook.js.org/) for some components
  
