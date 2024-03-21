require 'yaml'

# Define the function to calculate reading time
def calculate_reading_time(content)
  # Calculate reading time based on words count
  words_count = content.scan(/\w+/).size
  words_per_minute = 200 # Adjust as needed
  minutes = (words_count.to_f / words_per_minute).ceil
  "#{minutes} minute#{minutes != 1 ? 's' : ''}"
end

# Read each post file in the _posts directory
Dir.glob('_posts/*.md') do |file|
  # Read the YAML front matter and content from the file
  content = File.read(file)
  front_matter, body = content.split('---', 3)&.[](1, 2) # Split front matter and content

  # Calculate reading time using the content of the post
  reading_time = calculate_reading_time(body)

  # Update the time variable in the front matter
  updated_front_matter = front_matter.gsub(/^time: .*/, "time: \"#{reading_time}\"")

  # If the time field doesn't exist in the front matter, insert it
  updated_front_matter += "time: \"#{reading_time}\"" unless front_matter.include?('time:')

  # Remove any trailing or leading empty lines in the front matter
  updated_front_matter.strip!

  # Write the modified front matter and content back to the file
  File.write(file, "---\n#{updated_front_matter}\n---#{body}")
end
